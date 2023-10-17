import { DataSource } from "typeorm";
import { DeviceEntity } from "./entities/device.entity";
import { UserEntity } from "../user/entities/user.entity";
import { RoleEntity } from "../role/entities/role.entity";
import { GroupsEntity } from "../group/entities/group.entity";

export const DeviceProviders = [
  {
    provide: "DEVICE_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(DeviceEntity),
    inject: ["DATA_SOURCE"],
  },
  {
    provide: "USERS_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(UserEntity),
    inject: ["DATA_SOURCE"],
  },
  {
    provide: "GROUP_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(GroupsEntity),
    inject: ["DATA_SOURCE"],
  },
  {
    provide: "ROLE_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(RoleEntity),
    inject: ["DATA_SOURCE"],
  },
];
