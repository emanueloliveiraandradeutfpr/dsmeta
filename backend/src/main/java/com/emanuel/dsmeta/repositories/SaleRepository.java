package com.emanuel.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emanuel.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{
	
}
