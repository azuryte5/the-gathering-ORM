const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint Like use api and then tags based on index.

router.get('/', (req, res) => {
Tag.findAll({
  include: [{model: Product}]
}).then(dbTags => {
  res.json(dbTags);
});
   // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
Tag.findOne({
  where: {
    id: req.params.id
  },
  include: [{model: Product}]
}).then(dbTag => {
  res.json(dbTag)
  });

});

router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name
  }).then(dbTag => {
    res.json(dbTag)
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where:{
      id: req.params.id,
    },
  }).then(dbTag => {
    res.json(dbTag)
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
      }
    }).then(dbCategory => {
    res.json(dbCategory)
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
