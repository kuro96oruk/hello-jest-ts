/**
 * @jest-environment node
 */
import axios from "axios";
import Users from "./users";

jest.mock("axios");

test("should fetch all users", async () => {
  const users = [{name: "Bob"}];
  const resp = {data: users};

  (axios as jest.Mocked<typeof axios>).get.mockResolvedValue(resp);

  await expect(Users.search()).resolves.toEqual(users);
});
