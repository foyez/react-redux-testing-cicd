// https://github.com/hbarcelos/better-redux-tests

import { PayloadAction, getDefaultMiddleware } from "@reduxjs/toolkit";
import configureMockStore from "redux-mock-store";
import axios from "axios";

import {
  robotReducer,
  initialState,
  loadRobots,
  changeSearchField,
  fetchRobots,
  loadRobotsSuccess,
  loadRobotsFailure,
} from "./robot";
import { AppThunk, AppDispatch } from "./store";
import { UserApi } from "../api";

jest.mock("../api");
// const mockedApiCall = UserApi as jest.Mocked<typeof axios>

const middleware = [...getDefaultMiddleware({ thunk: true })];
const mockStore = configureMockStore<AppThunk, AppDispatch>(middleware);

describe("robot slice", () => {
  describe("reducer, action creators and selectors", () => {
    it("should return the initial state on first run", () => {
      const state = initialState;
      const action = {} as PayloadAction;
      const result = robotReducer(undefined, action);

      expect(result).toEqual(state);
    });

    it("should set loading state when a fetch request is made", () => {
      const state = { ...initialState, loading: true };
      const result = robotReducer(initialState, loadRobots());

      expect(result).toEqual(state);
    });

    it("should set loading, error and robots info when a fetch request is success", () => {
      const payload = [
        { id: 1, name: "foyez", email: "foyez@email.com" },
        { id: 2, name: "rumon", email: "rumon@email.com" },
      ];
      const state = {
        ...initialState,
        loading: false,
        errors: null,
        robots: payload,
      };
      const result = robotReducer(initialState, loadRobotsSuccess(payload));

      expect(result).toEqual(state);
    });

    it("should set loading and errors state when fetch request is failed", () => {
      const error = new Error("fetching failed");
      const state = { ...initialState, loading: false, errors: error.message };
      const result = robotReducer(
        initialState,
        loadRobotsFailure(error.message)
      );

      expect(result).toEqual(state);
    });
  });

  describe("thunk", () => {
    it("creates both loadRobots and loadRobotsSuccess when fetching robots succeeds", async () => {
      const responsePayload = [
        { id: 1, name: "foyez", email: "foyez@email.com" },
        { id: 2, name: "rumon", email: "rumon@email.com" },
      ];
      const store = mockStore();
      const actions = store.getActions();

      UserApi.getUsers.mockResolvedValueOnce({ data: responsePayload });

      await store.dispatch(fetchRobots());

      const expectedActions = [
        loadRobots(),
        loadRobotsSuccess(responsePayload),
      ];
      console.log(actions[1].payload);
      expect(actions).toEqual(expectedActions);
    });
  });

  // it('should loadRobot', () => {
  //   const state = { ...initialState, loading: true }
  //   const result = robotReducer(initialState, loadRobots())

  //   expect(result).toEqual(state)
  // })

  // it('should fetch robots', () => {
  //   const store = mockStore()
  //   store.dispatch(fetchRobots())
  //   const action = store.getActions()
  // })

  // it('should create an action to search robots', () => {
  //   const text = 'cat'
  //   const state = { ...initialState, searchField: text }
  //   const result = robotReducer(initialState, changeSearchField(text))

  //   expect(result).toEqual(state)
  // })
});
