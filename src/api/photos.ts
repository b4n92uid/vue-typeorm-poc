import { Photo } from "@/entity/Photo";
import { getRepository } from "typeorm";

export function fetchPhotoList() {
  const photoRepo = getRepository(Photo);

  return photoRepo.find({ relations: ["user"] });
}
