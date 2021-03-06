'use strict';

const express = require('express');

const router = express.Router();

/* ========== GET/READ ALL ITEMS ========== */
router.get('/', (req, res, next) => {

  console.log('Get All Notes');
  res.json([
    { id: 1, title: 'Temp 1' },
    { id: 2, title: 'Temp 2' },
    { id: 3, title: 'Temp 3' }
  ]);

});

/* ========== GET/READ A SINGLE ITEM ========== */
router.get('/:id', (req, res, next) => {

  console.log('Get a Note');
  res.json({ id: 1, title: 'Temp 1' });

});

/* ========== POST/CREATE AN ITEM ========== */
router.post('/', (req, res, next) => {

  console.log('Create a Note');
  res.location('path/to/new/document').status(201).json({ id: 2, title: 'Temp 2' });

});

/* ========== PUT/UPDATE A SINGLE ITEM ========== */
router.put('/:id', (req, res, next) => {

  console.log('Update a Note');
  res.json({ id: 1, title: 'Updated Temp 1' });

});

/* ========== DELETE/REMOVE A SINGLE ITEM ========== */
router.delete('/:id', (req, res, next) => {

  console.log('Delete a Note');
  res.status(204).end();
});

module.exports = router;
