import camelCaseKeys from 'camelcase-keys-deep';
import decamelCaseKeys from 'decamelize-keys-deep';
import decamelize from 'decamelize';
import decorateWithRecordList from 'datenkrake/src/adapters/decorate-with-record-list';

const REQUESTED_RANGE_NOT_SATISFIABLE = 416;

const requiredParam = (name) => { throw Error(`${name} is a required parameter`); };

const buildRepository = decorateWithRecordList(({
  resource = requiredParam('path'),
}) => {
  const url = `${decamelize(resource)}`;

  const create = (connection, values) => Promise.resolve()
    .then(() => connection.post(url, decamelCaseKeys(values)))
    .then(response => camelCaseKeys(response.data[0]));

  const where = (connection, filter = {}) => {
    return Promise.resolve()
      .then(() => connection.get(url))
      .then(response => camelCaseKeys(response.data))
      .catch((result) => {
        if (result.response.status === REQUESTED_RANGE_NOT_SATISFIABLE) {
          return [];
        }
        throw result;
      });
  };

  const update = (connection, filter, values = {}) => {
    return Promise.resolve()
    .then(() => connection.put(`${url}/${filter.where.id.value}`, decamelCaseKeys(values)))
    .then(response => camelCaseKeys(response.data))
  };

  const destroy = (connection, filter) => Promise.resolve()
    .then(() => connection.delete(`${url}/${filter.where.id.value}`))
    .then(response => camelCaseKeys(response.data));

  const count = (connection, filter = {}) => Promise.resolve()
    .then(() => where(connection, filter))
    .then(response => response.length);

  return {
    create,
    where,
    update,
    destroy,
    count,
  };
});

export default buildRepository;
