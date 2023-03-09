package com.maple.app;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableTransactionManagement
@MapperScan("com.maple.app.dao")
public class AppApplication {

	public static void main(String... args) {
		SpringApplication.run(AppApplication.class, args);
	}
}
