package com.moon.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import com.moon.utils.BaseController;
import com.moon.entity.Poetry;
import com.moon.service.PoetryService;

@Controller
@RequestMapping("/moon/Poetry")
public class PoetryController extends BaseController {
	@Autowired
	private PoetryService poetryService;

}