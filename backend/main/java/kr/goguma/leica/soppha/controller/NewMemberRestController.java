package kr.goguma.leica.soppha.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class NewMemberRestController {


    @GetMapping("/soppha")
    public String index(){
        return "soppha";

    }

}
