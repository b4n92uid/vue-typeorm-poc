import { User } from "@/entity/User";
import { getRepository } from "typeorm";

export function fetchUserList() {
  const userRepo = getRepository(User);

  return userRepo.find();
}
