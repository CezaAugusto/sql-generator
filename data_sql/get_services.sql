SELECT
    a.id_proposta,
    b.id_os,
    c.start
FROM
    assoc_address a 
JOIN mod_os b on b.contrato_mod = a.id
JOIN eng_agenda_os c on b.id_os = c.os
WHERE
    a.id_proposta IN() and a.sequence = 1
ORDER by a.id_proposta






