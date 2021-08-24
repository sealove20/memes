import { all, put, takeLatest } from "redux-saga/effects";

import axios from "axios";

async function getMeme() {
  const response = await axios.get("https://meme-api.herokuapp.com/gimme");

  return response.data;
}

function* fetchMeme(): Generator<any> {
  const payload: any = yield getMeme();

  yield put({ type: "MEME_RECEIVED", payload });
}

function* actionWatcher() {
  yield takeLatest("GET_MEME", fetchMeme);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
