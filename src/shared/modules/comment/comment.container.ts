import { Container } from 'inversify';
import { types } from '@typegoose/typegoose';
import { CommentEntity, CommentModel } from './comment.entity.js';
import { Component } from '../../types/index.js';
import { CommentService } from './comment-service.interface.js';
import { DefaultCommentService } from './default-comment.service.js';
import { Controller } from '../../libs/rest/index.js';
import { CommentController } from './comment.controller.js';

export const createCommentContainer = () => {
  const commentContainer = new Container();

  commentContainer.bind<types.ModelType<CommentEntity>>(Component.CommentModel).toConstantValue(CommentModel);
  commentContainer.bind<CommentService>(Component.CommentService).to(DefaultCommentService).inSingletonScope();
  commentContainer.bind<Controller>(Component.CommentController).to(CommentController).inSingletonScope();

  return commentContainer;
};
