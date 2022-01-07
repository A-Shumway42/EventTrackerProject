package com.skilldistillery.fitness.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.fitness.entities.User;

public interface UserRepository extends JpaRepository<User, Integer>{

}
