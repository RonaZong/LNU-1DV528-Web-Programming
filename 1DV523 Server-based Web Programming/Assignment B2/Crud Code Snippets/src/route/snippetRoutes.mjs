import express from 'express';
import { 
  listSnippets, 
  showCreateForm, 
  createSnippet, 
  showEditForm, 
  updateSnippet, 
  deleteSnippet 
} from '../controllers/snippetController.mjs';
import { requireAuth, checkOwnership } from '../middleware/authMiddleware.mjs';

const router = express.Router();

router.get('/', listSnippets);
router.get('/create', requireAuth, showCreateForm);
router.post('/', requireAuth, createSnippet);
router.get('/:id/edit', requireAuth, checkOwnership, showEditForm);
router.post('/:id', requireAuth, checkOwnership, updateSnippet);
router.post('/:id/delete', requireAuth, checkOwnership, deleteSnippet);

export default router;