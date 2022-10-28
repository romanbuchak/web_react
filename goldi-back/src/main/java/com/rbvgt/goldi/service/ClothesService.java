package com.rbvgt.goldi.service;

import com.rbvgt.goldi.model.Clothes;
import com.rbvgt.goldi.repositories.ClothesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import javax.transaction.Transactional;
import java.util.List;

@Service
public class ClothesService {
    private final ClothesRepository clothesRepository;

    @Autowired
    public ClothesService(ClothesRepository clothesRepository) {
        this.clothesRepository = clothesRepository;
    }

    public List<Clothes> getAll() {
        return clothesRepository.findAll();
    }

    public Clothes getOne(Integer id) {
        return clothesRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public void create(Clothes clothes) {
        clothesRepository.save(clothes);
    }

    @Transactional
    public void update(Integer id, Clothes clothes) {
        Clothes newClothes = clothesRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        newClothes.setName(clothes.getName());
        newClothes.setPrice(clothes.getPrice());
        newClothes.setImage(clothes.getImage());
        newClothes.setDescription(clothes.getDescription());

    }

    public void delete(Integer id) {
        clothesRepository.deleteById(id);
    }
}
