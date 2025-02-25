/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    id: 'car_favorites',
    name: 'car_favorites',
    type: 'base',
    system: false,
    schema: [
      {
        id: 'user_id',
        name: 'user_id',
        type: 'relation',
        required: true,
        unique: false,
        options: {
          collectionId: '_pb_users_auth_',
          cascadeDelete: true,
          maxSelect: 1,
          displayFields: []
        }
      },
      {
        id: 'car_id',
        name: 'car_id',
        type: 'relation',
        required: true,
        unique: false,
        options: {
          collectionId: 'cars',
          cascadeDelete: true,
          maxSelect: 1,
          displayFields: []
        }
      }
    ],
    indexes: ['CREATE UNIQUE INDEX idx_user_car ON car_favorites (user_id, car_id)'],
    listRule: '@request.auth.id = user_id',
    viewRule: '@request.auth.id = user_id',
    createRule: '@request.auth.id = @request.data.user_id',
    updateRule: '@request.auth.id = user_id',
    deleteRule: '@request.auth.id = user_id',
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("car_favorites");

  return dao.deleteCollection(collection);
});
