import { Request, Response } from 'express';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../models/userModel';

export const getUsers = (req: Request, res: Response): void => {
  res.json(getAllUsers());
};

export const getUser = (req: Request, res: Response): void => {
  const user = getUserById(parseInt(req.params.id, 10));
  if (!user) {
    res.status(404).send('User not found');
  } else {
    res.json(user);
  }
};

export const addUser = (req: Request, res: Response): void => {
  const newUser = createUser(req.body);
  res.status(201).json(newUser);
};

export const editUser = (req: Request, res: Response): void => {
  const updatedUser = updateUser(parseInt(req.params.id, 10), req.body);
  if (!updatedUser) {
    res.status(404).send('User not found');
  } else {
    res.json(updatedUser);
  }
};

export const removeUser = (req: Request, res: Response): void => {
  const success = deleteUser(parseInt(req.params.id, 10));
  if (!success) {
    res.status(404).send('User not found');
  } else {
    res.status(204).send();
  }
};
