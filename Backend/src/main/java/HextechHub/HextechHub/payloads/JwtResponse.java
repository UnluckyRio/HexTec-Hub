package HextechHub.HextechHub.payloads;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class JwtResponse {
    private String token;
    private String type = "Bearer";
    private Long id;
    private String nome;
    private String cognome;
    private String email;
    private String riotId;

    public JwtResponse(String token, Long id, String nome, String cognome, String email, String riotId) {
        this.token = token;
        this.id = id;
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.riotId = riotId;
    }
}
