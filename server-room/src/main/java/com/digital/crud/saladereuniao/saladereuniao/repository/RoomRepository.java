package com.digital.crud.saladereuniao.saladereuniao.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.digital.crud.saladereuniao.saladereuniao.model.Room;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long>{

}
