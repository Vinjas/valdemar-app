export const HOST = 'http://localhost:8080/api';

export const RQ_KEY = {
  ALL_COLLECTIONS: 'ALL_COLLECTIONS',
  BOOKS_LIST_BY_COLLECTION: 'BOOKS_LIST_BY_COLLECTION',
  ALL_BOOKS: 'ALL_BOOKS'
};

export const RQ_DEFAULT_OPTIONS = {
  retry: false
};

export const DEFAULT_TOKEN = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkB2YWxkZW1hci5jb20iLCJleHAiOjE2ODE1Nzc4MTgsImlhdCI6MTY4MTU1OTgxOH0.cCCK2zkBZEoflE_iaoOkB3xEFirlbMXroOGhopDHT_Q1o7_arBFHwFjdFSJ0WWP7sqsCYHYiqnPWiOKnJm-Yug';

export const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const USERNAME_CHARACTERS = {
  max: 16,
  min: 3
};
