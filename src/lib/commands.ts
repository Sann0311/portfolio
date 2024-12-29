import { Prompt } from "../types";

export const MOTD = `🎉 Hello! 🎉

🌐 GitHub: &nbsp;&nbsp;<a style="cursor:pointer" href="https://github.com/Sann0311" target="_blank" rel="noopener noreferrer">https://github.com/Sann0311</a>
💼 LinkedIn: <a style="cursor:pointer" href="https://www.linkedin.com/in/saniyb/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/saniyb/</a>

Hello, I'm <b>Saniya Bhaladhare</b> 👋, a Master's student at the <b>University of Washington</b> 🎓 majoring in <b>Cybersecurity Engineering</b> 🛡️.  
I specialize in designing and implementing information security programs, frameworks, policies, procedures and regulatory compliance ✅. I thrive on solving complex problems, combining technical expertise with innovative approaches to ensure secure and efficient systems🔒. 

💡 Type 'help' to see the available commands and explore further! 🚀`.replace(
  /\n/g,
  "<br/>"
);


const KALI_LOGO = `
    <span class="text-kali-blue flex flex-col">
      <span>${"..............".replace(/ /g, "&nbsp;")}</span>
      <span>${"            ..,;:ccc,.".replace(/ /g, "&nbsp;")}</span>
      <span>${"          ......''';lxO.".replace(/ /g, "&nbsp;")}</span>
      <span>${".....''''..........,:ld;".replace(/ /g, "&nbsp;")}</span>
      <span>${"           .';;;:::;,,.x,".replace(/ /g, "&nbsp;")}</span>
      <span>${"      ..'''.            0Xxoc:,.  ...".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"  ....                ,ONkc;,;cokOdc',.".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${" .                   OMo           ':ddo.".replace(
        / /g,
        "&nbsp;"
      )}</span>

      <span>${"                    dMc               :OO;".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                    0M.                 .:o.".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                    ;Wd".replace(/ /g, "&nbsp;")}</span>
      <span>${"                     ;XO,".replace(/ /g, "&nbsp;")}</span>
      <span>${"                       ,d0Odlc;,..".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                            ..',;:cdOOd::,.".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                                     .:d;.':;.".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                                        'd,  .'".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                                          ;l   ..".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                                           .o".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                                             c".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                                             .'".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                                              .".replace(
        / /g,
        "&nbsp;"
      )}</span>
    </span>
  `;

const COMMANDS: Record<
  string,
  (username: string, args: string[], history: string[]) => string
> = {
  kali: () => KALI_LOGO,
  whoami: (username) => username,
  about: (username) => `Hello, I am ${username}!
    I am a Cybersecurity professional with 1.5+ years of experience in security assessments, designing and implementing information security programs, frameworks, policies, procedures, managing incident response and collaborating with cross-functional teams to implement security controls and solutions. 

    I am currently seeking a internship opportunity to utilize my skills in helping organizations identify and address potential security risks.
    
    Technical Skills: 
    - Security Management: Security assessments, Risk Management, Incident Response, Threat Intelligence, Security strategy and governance, Cybersecurity frameworks, Access management, Security Audit, Reporting
    - Application Security: OWASP Top 10, WAF
    - Ethical Hacking & Penetration Testing: PowerShell, Nmap, Wireshark
    - Operating Systems: Windows, Linux, Kali, Virtualization
    - Programming Languages: Python
    - Tools: SIEM, Firewall, IPS, Proxy, Data Leak Prevention (DLP), Anti-Virus, Endpoint detection and Response (EDR) and Sandboxing
    
    Soft Skills: Critical Thinking, Research, Decision Making, Security Awareness and Documentation
  `,
  resume: () =>
    openLink(
      "https://docs.google.com/document/d/1r3TdAvivzUD0Pamw4-6yRzNK58eSH1AWLLdR-GMMRRg/edit?usp=sharing"
    ),
  skills: () => `
<b>Technical Skills:</b> Security Assessment, Risk Management, Incident Response, Threat Intelligence, Security strategy and governance, Cybersecurity frameworks, Access Management, Security Audit, Reporting, Security Protocols, Network Security, Python Programming, Linux, Kali, Applied Cryptography, Bash Scripting, OWASP Top 10, IAM, Malware Analysis.

<b>Technical Tools and Technologies:</b>  GitHub,  Maltego, PowerShell, SIEM, Burp suite, Kali Linux, Nmap, Wireshark, IDA Freeware.

<b>Programming Languages:</b> Python, HTML/CSS.
`,
  linkedin: () => openLink("https://www.linkedin.com/in/saniyb/"),
  github: () => openLink("https://github.com/Sann0311"),
  email: () => openLink("mailto:bhaladharesaniya02@gmail.com"),
  projects: () => `
<b></b>:  
📌 
📌 
 
`,
};

export const COMMAND_NAMES = [...Object.keys(COMMANDS), "clear", "help"].sort(
  (a, z) => a.localeCompare(z)
);

export function getCommandResponse(
  { command, sudo, args }: Prompt,
  username: string,
  history: string[]
) {
  if (sudo && !command) return "Usage: sudo [command] [args]";
  if (!command) return "";

  if (command in COMMANDS) {
    let result = COMMANDS[command](username, args, history);
    if (command !== "kali") {
      result = result.replace(/\n/g, "<br/>");
    }

    return result;
  }

  if (command === "help") {
    return `Usage: [command] [options] 
    
      ${COMMAND_NAMES.join(", ")}`.replace(/\n/g, "<br/>");
  }

  return `${command}: command not found`;
}

function openLink(url: string) {
  setTimeout(() => window.open(url, "_blank")?.focus(), 1000);
  return `Redirecting to <a href="" target="_blank" rel="noreferrer noopener">${url}</a>...`;
}
