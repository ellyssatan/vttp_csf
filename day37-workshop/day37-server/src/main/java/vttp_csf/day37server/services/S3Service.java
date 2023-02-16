package vttp_csf.day37server.services;

import java.io.IOException;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.StringTokenizer;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;

@Service
public class S3Service {

    @Autowired
    private AmazonS3 s3Client;

    public String upload(MultipartFile file) throws IOException {
        // UserData
        Map<String, String> userData = new HashMap<>();
        userData.put("name", "elly");
        userData.put("uploadTime", new Date().toString());
        userData.put("originalFilename", file.getOriginalFilename());

        // Metadata
        ObjectMetadata metaData = new ObjectMetadata();
        metaData.setContentType(file.getContentType());
        metaData.setContentLength(file.getSize());
        metaData.setUserMetadata(userData);

        String key = UUID.randomUUID().toString().substring(0, 8);

        StringTokenizer tk = new StringTokenizer(file.getOriginalFilename(), ".");
        int count = 0;
        String filenameExt = "";

        while (tk.hasMoreTokens()) {
            if (count == 1) {
                filenameExt = tk.nextToken();
                break;
            } else {
                filenameExt = tk.nextToken();
            }
            count++;
        }

        System.out.println("myobjects/%s.%s".formatted(key, filenameExt));

        if (filenameExt.equals("blob")) {
            filenameExt = filenameExt + ".png";
        }

        PutObjectRequest putReq = new PutObjectRequest(
            "databucket",
            "myobject/%s.%s".formatted(key, filenameExt),
            file.getInputStream(),
            metaData);

        putReq.withCannedAcl(CannedAccessControlList.PublicRead);
        s3Client.putObject(putReq);

        return "myobject/%s.%s".formatted(key, filenameExt);
        
    }
    
}
