package com.rbvgt.goldi.repositories;

import com.rbvgt.goldi.model.Clothes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClothesRepository extends JpaRepository<Clothes, Integer> {
}
