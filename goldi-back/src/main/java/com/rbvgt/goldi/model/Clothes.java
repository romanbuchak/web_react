package com.rbvgt.goldi.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Clothes {
    @Id
    @GeneratedValue
    private Integer id;

    @Column
    private String name;

    @Column
    private Integer price;

    @Column
    private String image;

    @Column
    private String description;
}
