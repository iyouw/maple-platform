package com.maple.app.infra;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {
  @ExceptionHandler(Exception.class)
  public final ResponseEntity<ResponseBase<String>> handleGlobalException(Exception exp) {
    var data = ResponseBase.fail(exp.getMessage(), exp.getMessage());
    return new ResponseEntity<ResponseBase<String>>(data, HttpStatus.OK);
  }
}
