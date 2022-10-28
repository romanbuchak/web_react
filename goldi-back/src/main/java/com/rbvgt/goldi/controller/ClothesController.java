package com.rbvgt.goldi.controller;

import com.rbvgt.goldi.model.Clothes;
import com.rbvgt.goldi.service.ClothesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/clothes")

public class ClothesController {
    private final ClothesService clothesService;

    @Autowired
    public ClothesController(ClothesService clothesService) {
        this.clothesService = clothesService;
    }

    @GetMapping("/get")
    private List<Clothes> getAll() {
        return clothesService.getAll();
    }

    @GetMapping("get/{id}")
    private Clothes getOne(@PathVariable("id") Integer id){
        return clothesService.getOne(id);
    }

    @PostMapping
    public void create(@RequestBody Clothes clothes) {
        clothesService.create(clothes);
    }

    @PutMapping("/update/{id}")
    private void update(@PathVariable("id") Integer id, @RequestBody Clothes clothes) {
        clothesService.update(id, clothes);
    }

    @DeleteMapping("/delete/{id}")
    private void delete(@PathVariable("id") Integer id) {
        clothesService.delete(id);
    }

}
