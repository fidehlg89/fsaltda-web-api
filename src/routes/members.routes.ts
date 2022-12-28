import { Router } from "express";
import { getMembers, createMember, getMember, deleteMember, updateMember } from '../controllers/members.controller'

const router = Router();

router.route('/')
    .get(getMembers)
    .post(createMember)

router.route('/:memberId')
    .get(getMember)
    .delete(deleteMember)
    .put(updateMember)

export default router;
