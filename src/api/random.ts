import faker from "faker";
import { sample, times } from "lodash";
import { getRepository } from "typeorm";

import { Photo } from "../entity/Photo";
import { User } from "../entity/User";

export async function loadRandomData() {
  const userRepo = getRepository(User);
  const photoRepo = getRepository(Photo);

  await userRepo.clear();
  await photoRepo.clear();

  const userQueries = times(8, async () => {
    const u = new User();
    u.name = faker.name.firstName();

    await userRepo.save(u);
  });

  await Promise.all(userQueries);

  const users = await userRepo.find();

  const pictureQueries = times(32, async i => {
    const p = new Photo();
    p.name = faker.address.cityName();
    p.description = faker.lorem.sentence();
    p.url = `https://source.unsplash.com/512x512/?nature,water&${
      +new Date() + i
    }`;
    p.views = 0;
    p.user = sample(users) as User;

    await photoRepo.save(p);
  });

  await Promise.all(pictureQueries);
}
