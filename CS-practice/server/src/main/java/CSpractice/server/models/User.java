package CSpractice.server.models;

import java.util.Optional;

import jakarta.json.Json;
import jakarta.json.JsonObject;

public class User {

    private Optional<String> name;
    private String email;
    private String password;

    public Optional<String> getName() {        return name;        }
    public void setName(Optional<String> name) {        this.name = name;       }

    public String getEmail() {        return email;     }
    public void setEmail(String email) {        this.email = email;     }

    public String getPassword() {        return password;       }
    public void setPassword(String password) {        this.password = password;     }

    @Override
	public String toString() {
		return "User[name=%s, email=%s, password=%s]".formatted(name, email, password);
	}

    public JsonObject toJson() {
        return Json.createObjectBuilder()
                .add("name", name.isPresent() ? name.get() : "")
                .add("email", email)
                .add("password", password)
                .build();
    }

    public static User create(MultiValueMap<String, String> form) {
        User c = new User();
        c.setName(form.getFirst("name"));
        c.setPhone(Integer.parseInt(form.getFirst("phone")));
        c.setEmail(form.getFirst("email"));
        return c;
    }

}
