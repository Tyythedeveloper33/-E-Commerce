const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req,res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const CategoryData = await Category.findAll({
     // include: [{ model: Product }],
    });
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  console.log("Incoming Request Parameter: ", req.params)
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No Category found with that id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }

});

router.post('/', async (req, res) => {
  // capture the user sent data (req.body)
  console.log("Incoming Data: ", req.body)
  // create a new category
  try {
    const newCategory = await Category.create(req.body);
    console.log("New Obj: ", newCategory);
    res.status(200).json(newCategory);

  } catch(err) {
    res.status(500).json(err);
  }
});

router.put('/:id', (req, res) => {
  console.log("Incoming Data: ", req.body)
  console.log("Incoming Request Parameter: ", req.params)
  
  // update a category by its `id` value
  res.json({ msg: "Created New Record"})
});

router.delete('/:id', (req, res) => {
  console.log("Incoming Request Parameter: ", req.params)
  // delete a category by its `id` value
});

module.exports = router;
