import { Module } from '@nestjs/common';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from './entities/booking.entities';

@Module({
  imports: [TypeOrmModule.forFeature([Booking])], 
  controllers: [BookingController],
  providers: [ BookingService],
})
export class BookingModule {}



