import { Column, Entity } from 'typeorm';
import BaseEntity from '../../common/entity/base.entity';

@Entity()
export default class Record extends BaseEntity {
  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  role: string;

  @Column()
  amount: number;

  @Column()
  status: string;
}
