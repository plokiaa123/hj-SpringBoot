package com.moon.test;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.moon.dao.StudentMapper;
import com.moon.entity.Student;

@RunWith(SpringRunner.class)
@SpringBootTest
public class Test01 {
	private static final Logger logger=LoggerFactory.getLogger(Test01.class);
	@Autowired
	private StudentMapper studentMapper;
	
	@Test
	public void m1() {
		logger.debug("这是debug日志");
        logger.info("这是info日志");
        logger.error("这是error日志");
        Student student = studentMapper.selectByPrimaryKey(902);
        System.out.println(student);
	}
}
