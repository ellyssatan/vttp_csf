package day37.fileUpload.controllers;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import day37.fileUpload.services.S3Service;
import jakarta.json.Json;
import jakarta.json.JsonObject;

@Controller
@RequestMapping
public class FileUploadController {

    @Autowired
    private S3Service s3Svc;
    
    @PostMapping(path = "/upload",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    @CrossOrigin()
    public ResponseEntity<String> postUploadFromAngular(@RequestPart MultipartFile myImage, @RequestPart String title,
        @RequestPart String complain){

        System.out.printf("title: %s\n", title);
        System.out.printf("complain: %s\n", complain);
        System.out.printf("file name: %s\n", myImage.getOriginalFilename());
        System.out.printf("content type: %s\n", myImage.getContentType());

        String key = "";

        try {
            key = s3Svc.upload(myImage);
        } catch (IOException io) {
            io.printStackTrace();
        }

        JsonObject payload = Json.createObjectBuilder()
                                .add("imageKey", key)
                                .build();

        return ResponseEntity.ok(payload.toString());
    }

    // upload from form
    @PostMapping(path = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public String postUpload(@RequestPart MultipartFile myFile,
            @RequestPart String name, Model model) {
        
        String key = "";

        try {
            key = s3Svc.upload(myFile);
        } catch (IOException ex) {
            ex.printStackTrace();
        }
        
        model.addAttribute("name", name);
        model.addAttribute("file", myFile);
        model.addAttribute("key", "myobjects/%s".formatted(key));
        
        return "upload";
    }
}
