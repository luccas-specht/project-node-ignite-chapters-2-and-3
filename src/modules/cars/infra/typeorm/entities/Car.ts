import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm'
import { v4 as uuidV4 } from 'uuid'

import { Category, Specification } from '.'

@Entity('cars')
export class Car {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  brand: string

  @Column()
  daily_rate: number

  @Column()
  fine_amount: number

  @Column()
  description: string

  @Column()
  license_plate: string

  @Column()
  available: boolean

  @CreateDateColumn()
  created_at: Date

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category

  @Column()
  category_id: string

  @ManyToMany(() => Specification)
  @JoinTable({
    name: 'specification_cars',
    joinColumns: [{ name: 'car_id' }],
    inverseJoinColumns: [{ name: 'specification_id' }],
  })
  specifications: Specification[]

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
      this.available = true
    }
  }
}
