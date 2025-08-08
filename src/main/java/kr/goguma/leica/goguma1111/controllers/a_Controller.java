package kr.goguma.leica.goguma1111.controllers;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class a_Controller {

    @GetMapping("/Graph")
    public String home() {
        return "Graph";
    }

}
