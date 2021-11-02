package com.potteryshop.repository;

import java.awt.print.Pageable;
import java.util.List;
import java.util.Set;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;

import com.potteryshop.entities.SanPham;

public interface SanPhamRepository extends JpaRepository<SanPham, Long>, QuerydslPredicateExecutor<SanPham>{
	
	  @Query(value = "select e FROM SanPham e ORDER BY id ")  
	List<SanPham> findAllByOrderByIdAsc();
	  
	  
	List<SanPham> findByIdIn(Set<Long> idList);
}
