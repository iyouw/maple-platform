package com.maple.app.infra;

import java.time.LocalDateTime;
import java.util.UUID;

public class EntityBase<TKey> {
  private TKey id;
  private UUID createdUserId;
  private UUID latestUpdatedUserId;
  private LocalDateTime createdTime;
  private LocalDateTime latestUpdatedTime;
  
  public TKey getId() {
    return this.id;
  }

  public void setId(TKey id){
    this.id = id;
  }

  public UUID getCreatedUserId() {
    return this.createdUserId;
  }

  public void setCreatedUserId(UUID createdUserId) {
    this.createdUserId = createdUserId;
  }

  public UUID getLatestUpdatedUserId() {
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
}
