package com.maple.app.entity;

import java.util.UUID;

import javax.management.loading.PrivateClassLoader;

import com.maple.app.infra.EntityBase;

public class Page extends EntityBase<UUID> {
  private String name;
  private String icon;
  private String description;
  private Integer width;
  private Integer height;
  private String model;

  public String getName() {
    return this.name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getIcon() {
    return this.icon;
  }

  public void setIcon(String icon) {
    this.icon = icon;
  }

  public String getDescription() {
    return this.description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public Integer getWidth() {
    return this.width;
  }

  public void setWidth(Integer width) {
    this.width = width;
  }

  public Integer getHeight() {
    return this.height;
  }

  public void setHeight(Integer height) {
    this.height = height;
  }

  public String getModel() {
    return this.model;
  }

  public void setModel(String model) {
    this.model = model;
  }
}
