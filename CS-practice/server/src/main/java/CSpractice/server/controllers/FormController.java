package CSpractice.server.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("")
@CrossOrigin(origins = "*")
public class FormController {

    @PostMapping(consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    @ResponseBody
    ResponseEntity<String> postContact(@RequestBody MultiValueMap<String, String> form) {

        System.out.println("contact form " + form);

        Contact c = Contact.create(form);
        System.out.println(">>>> contact " + c);

        return ResponseEntity.ok(c.toJson().toString());
    }
}
