package com.maple.app.infra;

import java.time.LocalDateTime;

public class EntityBase<TKey> {
  private TKey id;
  private String createdUserId;
  private String latestUpdatedUserId;
  private LocalDateTime createdTime;
  private LocalDateTime latestUpdatedTime;
  private Boolean deleted;
  
  public TKey getId() {
    return this.id;
  }

  public void setId(TKey id){
    this.id = id;
  }

  public String getCreatedUserId() {
    return this.createdUserId;
  }

  public void setCreatedUserId(String createdUserId) {
    this.createdUserId = createdUserId;
  }

  public String getLatestUpdatedUserId() {
    return this.latestUpdatedUserId;
  }

  public LocalDateTime getCreatedTime() {
    return this.createdTime;
  }

  public void setCreatedTime(LocalDateTime createdTime) {
    this.createdTime = createdTime;
  }

  public LocalDateTime getLatestUpdatedTime() {
    return this.latestUpdatedTime;
  }

  public void setLatestUpdatedTime(LocalDateTime latestUpdatedTime) {
    this.latestUpdatedTime = latestUpdatedTime;
  }

  public Boolean getDeleted() {
    return this.deleted;
  }

  public void setDeleted(Boolean deleted){
    this.deleted = deleted;
  }
}
