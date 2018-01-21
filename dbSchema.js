'use strict';

var schema = db.define('config', {
  positionId: {
    type: 'int(11)',
    field: 'position_id',
  },
  positionName: {
    type: 'varchar(50)',
    field: 'position_name',
  },
  category: {
    type: 'varchar(20)',
    field: 'category',
  },
  status: {
    type: 'int(11)',
    field: 'status',
  },
  detail: {
    type: 'text',
    field: 'detail',
  },
  target: {
    type: 'int(11)',
    field: 'target',
  },
  createdAt: {
    type: 'datetime',
    field: 'created_at',
  },
  updatedAt: {
    type: 'datetime',
    field: 'updated_at',
  }
}, {
  tableName: 'ss_config',
  createdAt: false,
  updatedAt: false
});

module.exports = schema;
