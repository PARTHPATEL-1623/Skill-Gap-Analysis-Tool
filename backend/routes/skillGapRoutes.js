
const express = require('express');
const router = express.Router();
const { analyzeSkillGap, getRoadmap } = require('../controllers/skillGapController');

router.post('/skill-gap', analyzeSkillGap);
router.post('/roadmap', getRoadmap);

module.exports = router;
