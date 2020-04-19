package com.moon.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.moon.entity.Poetry;
import com.moon.dao.PoetryMapper;

@Transactional
@Service
public class PoetryService {
	@Autowired
	private PoetryMapper poetryMapper;

	public PoetryMapper getPoetryMapper() {
		return poetryMapper;
	}

}