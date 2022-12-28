import {Request, Response} from 'express'
import { connect } from '../database'
import {Member} from '../interfaces/Member'

export async function getMembers(req:Request, res:Response):Promise<Response>{
    const conn=await connect();
    const members= await conn.query('SELECT * FROM members');
    return res.json(members[0]);
};

export async function getMember(req:Request, res:Response):Promise<Response>{
    const id=req.params.memberId;
    const conn=await connect();
    const member=await conn.query('SELECT * from members where id = ?', [id]);
    return res.json(member[0]);
};

export async function createMember(req:Request, res:Response){
    const newMember:Member=req.body;
    const conn=await connect();
    await conn.query('INSERT INTO members set ?', [newMember]);
    return res.json({
        message:'Member created'
    });
};


export async function deleteMember(req:Request, res:Response){
    const id=req.params.memberId;
    const conn=await connect();
    const member=await conn.query('DELETE from members where id = ?', [id]);
    return res.json({
        message:'Member deleted',
        data: member
    });
};

export async function updateMember(req:Request, res:Response){
    const id=req.params.memberId;
    const updateMember:Member=req.body;
    const conn=await connect();
    await conn.query('UPDATE members set ? where id = ?', [updateMember,id]);
    return res.json({
        message:'Member updated'
    });
};
