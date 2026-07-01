Below is structured research for the five requested beginner VPN topics, organized into the ten evidence-based elements you specified. Each claim is backed by high‑quality sources (NIST, NSA/CISA, EFF, Mozilla, CSIRO, official vendor docs, and reputable security research).

***

## Topic 1: How VPNs Actually Work

### Beginner questions people actually ask
- What exactly is a “virtual private network” and how is it different from just using HTTPS in my browser? [ssd.eff](https://ssd.eff.org/module/choosing-vpn-thats-right-you)
- When I turn on a VPN, who can still see what I’m doing online—my ISP, the VPN company, sites I visit, or all of them? [eff](https://www.eff.org/deeplinks/2017/04/heres-how-protect-your-privacy-your-internet-service-provider)
- Does a VPN protect all apps on my device or only my web browser, and does it work on phones, laptops, and home routers the same way? [nvlpubs.nist](https://nvlpubs.nist.gov/nistpubs/specialpublications/nist.sp.800-46r2.pdf)

### Most common misconceptions
- “A VPN makes me 100% anonymous online” – in reality, it mainly hides your IP and encrypts traffic between you and the VPN, but websites, trackers, and logins can still identify you. [serverman.co](https://www.serverman.co.uk/everything-vpn/top-10-vpn-misconceptions/)
- “Using a VPN means my ISP can’t see anything at all” – ISPs can still see that you’re connected to a VPN service and often the amount of data you transmit, even if they can’t see individual sites. [csrc.nist](https://csrc.nist.gov/pubs/sp/800/113/final)
- “VPN and proxy are the same” – proxies typically forward specific application traffic without strong encryption, while standards‑based VPNs create an authenticated, encrypted tunnel at the network layer. [csrc.nist](https://csrc.nist.gov/pubs/sp/800/113/final)

### Important facts experts agree on
- A VPN creates an encrypted tunnel between a client and a VPN gateway, using protocols such as IPsec, OpenVPN, or SSL/TLS, so traffic in transit cannot be easily read or modified. [media.defense](https://media.defense.gov/2021/Sep/28/2002863184/-1/-1/0/csi_selecting-hardening-remote-access-vpns-20210928.pdf)
- When you connect to a VPN, your traffic appears to come from the VPN server’s IP address rather than your own, masking your origin IP from sites and from your ISP. [ssd.eff](https://ssd.eff.org/module/choosing-vpn-thats-right-you)
- VPN gateways (especially remote‑access VPNs used for telework) are high‑value entry points into networks and therefore must be treated as critical security infrastructure and hardened accordingly. [securityaffairs](https://securityaffairs.com/122718/security/hardening-access-via-vpn-solutions.html)

### Areas where experts disagree
- Consumer necessity: some privacy advocates strongly recommend VPNs for most users on untrusted networks, while others argue that widespread HTTPS and good browser hygiene reduce the need for a VPN in many home scenarios. [ipvanish](https://www.ipvanish.com/blog/is-vpn-safe/)
- Protocol choices: NIST and NSA emphasize standards‑based IPsec and SSL/TLS VPNs for enterprise remote access, while some modern providers promote newer protocols like WireGuard as equally secure and more performant; experts differ on how quickly to adopt newer protocols. [mozilla](https://www.mozilla.org/en-US/products/vpn/features/)
- Threat modeling: EFF stresses that VPNs simply move trust from the ISP to the VPN provider, while many commercial VPNs market themselves as broad privacy solutions, leading to differing views on how far VPNs go toward “solving” surveillance problems. [research.csiro](https://research.csiro.au/isp/wp-content/uploads/sites/106/2016/09/vpnapps_imc16_presented_slides.pdf)

### Current recommendations from trustworthy organizations
- NSA/CISA advise selecting *standards‑based* remote‑access VPNs from reputable vendors, ensuring strong authentication, secure boot, and signed firmware, and then hardening and patching these systems aggressively. [csiac.dtic](https://csiac.dtic.mil/articles/nsa-cisa-release-guidance-on-selecting-and-hardening-remote-access-vpns/)
- NIST guidance on SSL VPNs and telework highlights planning, risk assessment, and strong authentication as prerequisites, and recommends managing remote access with technical and policy controls. [nvlpubs.nist](https://nvlpubs.nist.gov/nistpubs/specialpublications/nist.sp.800-46r2.pdf)
- EFF advises users to carefully evaluate VPN providers’ logging policies, business models, protocol choices (e.g., OpenVPN/IPsec), and client transparency, and warns specifically against ultra‑cheap or “lifetime” VPNs that may monetize user data. [eff](https://www.eff.org/deeplinks/2017/04/heres-how-protect-your-privacy-your-internet-service-provider)

### Important statistics
- In a study of 283 Android VPN apps, researchers found that 38% contained malware or malvertising components, underscoring how many consumer VPN implementations are actively risky rather than protective. [ibtimes.co](https://www.ibtimes.co.uk/it-safe-use-free-vpn-shocking-number-android-apps-found-contain-malware-1603034)
- The same study showed that 18% of VPN apps did not use encrypted tunnels at all, and 84% leaked IPv6 traffic and 66% leaked DNS queries, meaning many “VPN” apps failed at their core security function. [technologydecisions.com](https://www.technologydecisions.com.au/content/security/news/many-android-vpn-apps-are-not-secure-csiro-812764730)
- About 67% of Android VPN apps analyzed claimed to enhance privacy and security, yet 75% embedded third‑party tracking libraries and 82% requested access to sensitive data like SMS and contacts, revealing a disconnect between marketing and reality. [technologydecisions.com](https://www.technologydecisions.com.au/content/security/news/many-android-vpn-apps-are-not-secure-csiro-812764730)

### Privacy/security considerations
- A VPN provider can technically see and log your traffic in place of your ISP; EFF emphasizes that choosing a VPN is fundamentally about shifting trust and requires scrutiny of logging, jurisdiction, and transparency. [ssd.eff](https://ssd.eff.org/module/choosing-vpn-thats-right-you)
- Poorly designed or improperly configured VPNs can leak DNS or IPv6 traffic or fail to encrypt all connections, which can expose browsing activity despite the VPN being “on.” [research.csiro](https://research.csiro.au/isp/wp-content/uploads/sites/106/2016/09/vpnapps_imc16_presented_slides.pdf)
- Enterprise guidance from NSA/CISA and NIST emphasizes multi‑factor authentication, patching, and limiting management interfaces to reduce the chance that a compromised VPN gateway grants an attacker broad network access. [media.defense](https://media.defense.gov/2021/Sep/28/2002863184/-1/-1/0/csi_selecting-hardening-remote-access-vpns-20210928.pdf)

### Practical examples
- Remote employee connecting to corporate resources: an SSL or IPsec remote‑access VPN client authenticates with strong credentials and MFA, then encrypts all traffic to a hardened gateway that segments access to only required internal services. [securityaffairs](https://securityaffairs.com/122718/security/hardening-access-via-vpn-solutions.html)
- Public Wi‑Fi user at a café: enabling a trusted VPN encrypts traffic between the device and the VPN server, reducing the risk of local eavesdropping on unencrypted connections and mitigating rogue hotspot attacks. [eff](https://www.eff.org/deeplinks/2017/04/heres-how-protect-your-privacy-your-internet-service-provider)
- Typical consumer use cases identified in Android VPN research include accessing geo‑filtered content, bypassing simple censorship, and securing traffic on untrusted networks, but the same study shows many popular apps fail to deliver these protections safely. [research.csiro](https://research.csiro.au/isp/wp-content/uploads/sites/106/2016/09/vpnapps_imc16_presented_slides.pdf)

### Decision framework (for understanding how VPNs work in your context)
- Define your threat model: are you mainly concerned about ISP tracking, local network snooping, censorship, or targeted attacks, and how does that shape whether a VPN is the right tool versus alternatives like Tor or simply HTTPS? [ssd.eff](https://ssd.eff.org/module/choosing-vpn-thats-right-you)
- Map data flows: understand which devices and applications should send traffic through a VPN, which protocols are used, and where the VPN gateway is located (corporate, commercial provider, self‑hosted). [mozilla](https://www.mozilla.org/en-US/products/vpn/features/)
- Evaluate trust and implementation: verify that the provider uses standards‑based protocols, has clear logging and privacy policies, and, for organizations, that VPN endpoints are hardened as recommended by NSA/CISA. [media.defense](https://media.defense.gov/2021/Sep/28/2002863184/-1/-1/0/csi_selecting-hardening-remote-access-vpns-20210928.pdf)

### Sources (core references)
- NIST SP 800‑113: Guide to SSL VPNs. [nist](https://www.nist.gov/privacy-framework/nist-sp-800-113)
- NIST SP 800‑46 Rev. 2: Guide to Enterprise Telework, Remote Access, and BYOD. [nvlpubs.nist](https://nvlpubs.nist.gov/nistpubs/specialpublications/nist.sp.800-46r2.pdf)
- NSA/CISA: Selecting and Hardening Standards‑Based Remote Access VPN Solutions. [csiac.dtic](https://csiac.dtic.mil/articles/nsa-cisa-release-guidance-on-selecting-and-hardening-remote-access-vpns/)
- EFF: Surveillance Self‑Defense – “Choosing the VPN That’s Right for You” and ISP privacy guidance. [eff](https://www.eff.org/deeplinks/2017/04/heres-how-protect-your-privacy-your-internet-service-provider)
- CSIRO / Ikram et al.: “Privacy and Security Risks of Android VPN Permission‑enabled Apps.” [ibtimes.co](https://www.ibtimes.co.uk/it-safe-use-free-vpn-shocking-number-android-apps-found-contain-malware-1603034)

***

## Topic 2: Free VPN vs Paid VPN

### Beginner questions people actually ask
- Are free VPNs safe to use, or do they sell my data or inject ads and malware? [ibtimes.co](https://www.ibtimes.co.uk/it-safe-use-free-vpn-shocking-number-android-apps-found-contain-malware-1603034)
- What do I actually get by paying for a VPN compared with a free plan—speed, security, streaming access, or just marketing? [independent.co](https://www.independent.co.uk/extras/indybest/gadgets-tech/proton-vpn-free-review-b2790785.html)
- Is it better to use *no* VPN than a random free VPN app I find in an app store? [technologydecisions.com](https://www.technologydecisions.com.au/content/security/news/many-android-vpn-apps-are-not-secure-csiro-812764730)

### Most common misconceptions
- “All VPNs (free or paid) are equally secure because they ‘encrypt your traffic’” – empirical studies show many free VPNs lack proper encryption, leak data, or include malware. [ibtimes.co](https://www.ibtimes.co.uk/it-safe-use-free-vpn-shocking-number-android-apps-found-contain-malware-1603034)
- “Free VPNs are just slower; otherwise they’re the same as paid” – in practice, free services often monetize via tracking, ads, or data resale and may have fundamentally weaker security controls. [research.csiro](https://research.csiro.au/isp/wp-content/uploads/sites/106/2016/09/vpnapps_imc16_presented_slides.pdf)
- “If it has lots of downloads and a high rating in the app store, it must be trustworthy” – CSIRO’s analysis found millions of installs and high ratings among VPN apps with serious privacy and security issues. [research.csiro](https://research.csiro.au/isp/wp-content/uploads/sites/106/2016/09/vpnapps_imc16_presented_slides.pdf)

### Important facts experts agree on
- Large‑scale Android VPN research found that many free VPNs request excessive permissions, use third‑party tracking libraries, and in some cases perform TLS interception and JavaScript injection for advertising and redirection. [technologydecisions.com](https://www.technologydecisions.com.au/content/security/news/many-android-vpn-apps-are-not-secure-csiro-812764730)
- EFF warns that very cheap or lifetime VPN offers often indicate a business model based on monetizing user activity rather than subscription fees. [eff](https://www.eff.org/deeplinks/2017/04/heres-how-protect-your-privacy-your-internet-service-provider)
- Reputable VPN providers—free or paid—publish clear privacy policies, use open protocols (like OpenVPN or IPsec), and increasingly submit to independent security or no‑logs audits. [protonvpn](https://protonvpn.com/blog/no-logs-audit)

### Areas where experts disagree
- Some security practitioners argue that a *known* reputable free tier from a privacy‑focused provider can be acceptable for light use, while others discourage free VPNs categorically because the economic incentives often conflict with privacy. [reference](https://www.reference.com/science-technology/protonvpn-free-tier-features-limits-privacy-upgrade-options)
- There is debate over whether users should prioritize a paid VPN, or instead use alternatives like Tor or secure DNS plus HTTPS, depending on threat model and budget. [ssd.eff](https://ssd.eff.org/module/choosing-vpn-thats-right-you)
- Researchers differ on the extent to which app‑store vetting improvements have reduced the risks documented in earlier CSIRO studies of free VPN apps. [ibtimes.co](https://www.ibtimes.co.uk/it-safe-use-free-vpn-shocking-number-android-apps-found-contain-malware-1603034)

### Current recommendations from trustworthy organizations
- EFF advises avoiding dirt‑cheap or free VPNs that offer “lifetime” access and stresses evaluating whether the provider logs traffic, how long it has operated, and whether it uses well‑vetted open source protocols. [eff](https://www.eff.org/deeplinks/2017/04/heres-how-protect-your-privacy-your-internet-service-provider)
- NSA/CISA guidance for organizations emphasizes selecting standards‑based VPNs validated by independent security testing (e.g., NIAP Product Compliant List) rather than unverified or proprietary solutions, implicitly discouraging unvetted “free” enterprise VPN offerings. [securityaffairs](https://securityaffairs.com/122718/security/hardening-access-via-vpn-solutions.html)
- NIST’s remote‑access guidance focuses on security properties (authentication, encryption, management) rather than pricing, but by implication recommends solutions that meet federal security standards, which free consumer VPNs typically do not. [csrc.nist](https://csrc.nist.gov/pubs/sp/800/113/final)

### Important statistics
- 38% of Android VPN apps (many offering free services) in the CSIRO study showed malware presence, with 4% flagged by five or more antivirus engines, indicating persistent malicious behavior. [technologydecisions.com](https://www.technologydecisions.com.au/content/security/news/many-android-vpn-apps-are-not-secure-csiro-812764730)
- 18% of analyzed apps implemented tunneling protocols without encryption, and 84% leaked IPv6 traffic, while 66% leaked DNS queries, meaning substantial data exposure despite users believing they were protected. [technologydecisions.com](https://www.technologydecisions.com.au/content/security/news/many-android-vpn-apps-are-not-secure-csiro-812764730)
- 67% of these apps claimed privacy/security enhancement, yet 75% embedded third‑party tracking libraries and 82% requested sensitive permissions (SMS, contacts, logs), contradicting their privacy marketing. [research.csiro](https://research.csiro.au/isp/wp-content/uploads/sites/106/2016/09/vpnapps_imc16_presented_slides.pdf)

### Privacy/security considerations
- Free VPNs often rely on advertising, analytics, or data resale; some have been caught injecting JavaScript and intercepting TLS traffic to track and manipulate user sessions. [technologydecisions.com](https://www.technologydecisions.com.au/content/security/news/many-android-vpn-apps-are-not-secure-csiro-812764730)
- ISP‑privacy guidance from EFF notes that using a VPN exposes your entire internet activity to the VPN provider, so a free service that logs or sells data can be worse than the original ISP from a privacy standpoint. [eff](https://www.eff.org/deeplinks/2017/04/heres-how-protect-your-privacy-your-internet-service-provider)
- Paid VPNs are not automatically safe; users still need to check for independent audits, transparent privacy policies, open‑source clients, and clear statements about activity logging and jurisdiction. [protonvpn](https://protonvpn.com/blog/no-logs-audit)

### Practical examples
- A free VPN app promising “turbo speed and total anonymity” but using unencrypted tunnels and leaking DNS queries effectively provides little to no protection, as documented in CSIRO’s network measurements. [research.csiro](https://research.csiro.au/isp/wp-content/uploads/sites/106/2016/09/vpnapps_imc16_presented_slides.pdf)
- A privacy‑focused provider like Proton offers a free tier with the same basic encryption and no‑logs infrastructure as paid tiers but limits servers, speed, and features; this shows how free tiers can be constrained yet technically robust when funded by a larger ecosystem. [protonvpn](https://protonvpn.com/support/no-logs-vpn)
- Mozilla VPN (paid) illustrates a contrasting model: it charges subscription fees, publishes an easy‑to‑read privacy policy, uses the WireGuard protocol, and has undergone third‑party audits, aligning incentives around user trust rather than data monetization. [mozilla](https://www.mozilla.org/en-US/products/vpn/features/)

### Decision framework (free vs paid)
- Assess the business model: identify whether the VPN’s revenue comes from subscriptions or from advertising/data, using EFF’s checklist (price, logging claims, protocol choice, client openness). [ssd.eff](https://ssd.eff.org/module/choosing-vpn-thats-right-you)
- Evaluate minimum technical safeguards: require strong encryption, leak protection, standards‑based protocols, and, ideally, independent audits for any VPN you rely on, whether free or paid. [protonvpn](https://protonvpn.com/blog/no-logs-audit)
- Match plan type to use case: free tiers from reputable providers may be enough for occasional secure browsing on public Wi‑Fi, while paid plans are better suited for high‑bandwidth use, streaming, and multi‑device protection. [independent.co](https://www.independent.co.uk/extras/indybest/gadgets-tech/proton-vpn-free-review-b2790785.html)

### Sources
- CSIRO / Ikram et al., “Privacy and Security Risks of Android VPN Permission‑enabled Apps.” [ibtimes.co](https://www.ibtimes.co.uk/it-safe-use-free-vpn-shocking-number-android-apps-found-contain-malware-1603034)
- EFF: “Here’s How to Protect Your Privacy From Your Internet Service Provider.” [eff](https://www.eff.org/deeplinks/2017/04/heres-how-protect-your-privacy-your-internet-service-provider)
- NIST SP 800‑113 and SP 800‑46 (remote access guidance). [csrc.nist](https://csrc.nist.gov/pubs/sp/800/113/final)
- NSA/CISA: “Selecting and Hardening Standards‑Based Remote Access VPN Solutions.” [csiac.dtic](https://csiac.dtic.mil/articles/nsa-cisa-release-guidance-on-selecting-and-hardening-remote-access-vpns/)
- Proton VPN official documentation and no‑logs audit blog. [proton](https://proton.me/support/proton-plans)
- Mozilla VPN official features and privacy documentation. [mozilla](https://www.mozilla.org/en-US/products/vpn/features/)

***

## Topic 3: Is Proton VPN Free Good Enough?

### Beginner questions people actually ask
- Does Proton VPN’s free plan give me the same privacy and encryption as the paid versions, or is it weaker? [reference](https://www.reference.com/science-technology/protonvpn-free-tier-features-limits-privacy-upgrade-options)
- Is Proton VPN Free fast enough for everyday browsing, and can I use it for streaming or torrenting? [independent.co](https://www.independent.co.uk/extras/indybest/gadgets-tech/proton-vpn-free-review-b2790785.html)
- If Proton says it’s “no‑logs,” does that apply to free users as well, and has this been independently verified? [techradar](https://www.techradar.com/vpn/vpn-services/proton-vpn-aces-independent-no-logs-audit-for-the-fifth-consecutive-year)

### Most common misconceptions
- “Because it’s free, Proton VPN Free must be selling data like other free VPNs” – Proton’s published policy and independent audits assert a strict no‑logs policy across all tiers. [protonvpn](https://protonvpn.com/support/no-logs-vpn)
- “Proton VPN Free is just a limited‑time trial of the full product” – in reality, it’s an ongoing no‑cost tier with permanent feature and server limitations compared with Plus plans. [proton](https://proton.me/support/proton-plans)
- “If I use Proton VPN Free, I get full streaming and P2P support” – official feature comparisons note that specialty servers and streaming support are reserved for paid plans. [reference](https://www.reference.com/science-technology/protonvpn-free-tier-features-limits-privacy-upgrade-options)

### Important facts experts agree on
- Proton VPN’s apps are open source and have undergone third‑party security audits; Proton publicly shares no‑logs audit reports for its infrastructure, which is uncommon among VPN providers. [protonvpn](https://protonvpn.com/support/no-logs-vpn)
- Multiple independent audits by Securitum have confirmed that Proton VPN’s server infrastructure does not log user browsing activity, connection metadata, or DNS queries, and this policy is applied uniformly across servers and tiers. [securitum](https://www.securitum.com/public-reports/securitum-protonvpn-nologs-20220330.pdf)
- The free tier uses the same core encryption standards (e.g., AES‑256) and secure protocols (OpenVPN, WireGuard, and Proton’s stealth protocol) as paid tiers, according to Proton’s documentation and third‑party reviews. [independent.co](https://www.independent.co.uk/extras/indybest/gadgets-tech/proton-vpn-free-review-b2790785.html)

### Areas where experts disagree
- Some reviewers consider Proton VPN Free the best available free option for privacy‑focused users due to unlimited data and strong audits, while others argue that its performance limitations and lack of streaming support make upgrading to paid plans advisable for most modern use. [ipvanish](https://www.ipvanish.com/blog/is-vpn-safe/)
- There is differing opinion on whether relying on a single VPN provider—even one with strong audits and Swiss jurisdiction—is preferable to combining tools like secure DNS, HTTPS, and Tor for specific high‑risk scenarios. [ipvanish](https://www.ipvanish.com/blog/is-vpn-safe/)
- Some analysts focus on Proton’s open‑source apps and audit trail as sufficient proof of privacy practices, whereas others point out that any centralized VPN still introduces a single point of potential failure or pressure from legal orders, even if logs are not kept. [techradar](https://www.techradar.com/vpn/vpn-services/proton-vpn-aces-independent-no-logs-audit-for-the-fifth-consecutive-year)

### Current recommendations from trustworthy organizations and sources
- Proton itself strongly emphasizes using the free tier for basic privacy and testing the service, and recommends upgrading to Plus for streaming, Secure Core routing, multi‑device support, and higher speeds. [proton](https://proton.me/support/proton-plans)
- Independent coverage of Proton VPN’s no‑logs audits notes that repeated, published audits and Swiss jurisdiction make Proton a leading option for users prioritizing verifiable privacy, including free users. [vpnmentor](https://www.vpnmentor.com/news/proton-vpn-4th-independent-no-logs-policy-audit/)
- General VPN guidance from EFF and others still applies: even with a reputable provider like Proton, users should review logging policies, jurisdiction, protocol choices, and whether the VPN fits their specific threat model. [ssd.eff](https://ssd.eff.org/module/choosing-vpn-thats-right-you)

### Important statistics
- Proton reports that its strict no‑logs policy has been tested in over 400 legal cases where authorities requested logs, but Proton could not produce them because such logs did not exist. [techradar](https://www.techradar.com/vpn/vpn-services/proton-vpn-aces-independent-no-logs-audit-for-the-fifth-consecutive-year)
- Securitum’s repeated audits (five annual assessments as of 2026) found no evidence of user activity logs, DNS queries, or connection metadata stored in Proton’s VPN server infrastructure. [securitum](https://www.securitum.com/public-reports/securitum-protonvpn-nologs-20220330.pdf)
- Independent testing of Proton VPN Free on a 67 Mbps connection found typical download speeds between about 45–55 Mbps, enough for web browsing and HD video, but with more congestion and limited server choice compared with paid tiers. [independent.co](https://www.independent.co.uk/extras/indybest/gadgets-tech/proton-vpn-free-review-b2790785.html)

### Privacy/security considerations
- Proton VPN’s free tier operates under the same no‑logs policy as paid plans, meaning it does not log websites visited, IP addresses, session lengths, or traffic contents, according to official documentation and audits. [protonvpn](https://protonvpn.com/blog/no-logs-audit)
- The free tier lacks some advanced privacy features like Secure Core (multi‑hop routing through hardened entry servers) and NetShield (ad/tracker/malware blocking), which may matter for users with stronger threat models. [reference](https://www.reference.com/science-technology/protonvpn-free-tier-features-limits-privacy-upgrade-options)
- Being based in Switzerland, Proton is not subject to mandatory data retention laws, which reduces pressure to log user activity, but as EFF notes, users should still understand that the VPN provider inherently sits between them and the internet. [protonvpn](https://protonvpn.com/support/no-logs-vpn)

### Practical examples
- A user regularly using public Wi‑Fi for email and web browsing can use Proton VPN Free to encrypt traffic and mask their IP without data caps, benefiting from audited no‑logs infrastructure but accepting slower speeds and limited location choice. [reference](https://www.reference.com/science-technology/protonvpn-free-tier-features-limits-privacy-upgrade-options)
- A streamer trying to access geo‑restricted video libraries will find Proton VPN Free insufficient because it does not include streaming‑optimized servers; Proton explicitly positions Plus plans for this use case. [proton](https://proton.me/support/proton-plans)
- A journalist or activist with higher‑risk needs might treat Proton VPN Free as one privacy layer, but combine it with tools like Tor, secure messaging, and hardened devices, consistent with EFF’s broader guidance on threat modeling. [protonvpn](https://protonvpn.com/support/no-logs-vpn)

### Decision framework (is Proton VPN Free “good enough”?)
- Define required capabilities: list whether you need streaming, P2P, multi‑device connections, advanced routing (Secure Core), and ad/malware blocking, then compare these to what Proton’s free tier offers. [proton](https://proton.me/support/proton-plans)
- Establish privacy baseline: if your primary goal is to prevent ISP tracking and secure public Wi‑Fi with a reputable, audited VPN, Proton’s free tier generally meets that requirement; for more advanced or performance‑sensitive use, upgrading is more appropriate. [techradar](https://www.techradar.com/vpn/vpn-services/proton-vpn-aces-independent-no-logs-audit-for-the-fifth-consecutive-year)
- Revisit threat model periodically: align your use of Proton VPN Free (or Plus) with any changes in your work, travel, or risk profile, and consider complementing it with other privacy tools per EFF’s recommendations. [ssd.eff](https://ssd.eff.org/module/choosing-vpn-thats-right-you)

### Sources
- Proton VPN official plan and feature documentation. [reference](https://www.reference.com/science-technology/protonvpn-free-tier-features-limits-privacy-upgrade-options)
- Proton VPN official no‑logs policy and infrastructure audit blog. [protonvpn](https://protonvpn.com/blog/no-logs-audit)
- Securitum public reports on Proton VPN’s no‑logs audits. [securitum](https://www.securitum.com/public-reports/securitum-protonvpn-nologs-20220330.pdf)
- Independent performance and feature reviews of Proton VPN Free (e.g., The Independent). [independent.co](https://www.independent.co.uk/extras/indybest/gadgets-tech/proton-vpn-free-review-b2790785.html)
- EFF guidance on VPN threat models and trust considerations. [ssd.eff](https://ssd.eff.org/module/choosing-vpn-thats-right-you)

***

## Topic 4: Common VPN Myths

### Beginner questions people actually ask
- Does a VPN make me completely anonymous so nobody—government, hackers, or companies—can track me? [serverman.co](https://www.serverman.co.uk/everything-vpn/top-10-vpn-misconceptions/)
- Will a VPN automatically protect me from all malware, phishing, and account compromise? [ipvanish](https://www.ipvanish.com/blog/is-vpn-safe/)
- Are VPNs illegal or “for hackers only,” and can I get into trouble for using one? [cybersecuritycampaign.com](https://cybersecuritycampaign.com.hk/vpn/vpn-myths-debunked)

### Most common misconceptions (myths)
- “VPNs make you 100% anonymous”: EFF and security experts emphasize that VPNs hide your IP and encrypt traffic but do not stop cookies, browser fingerprinting, account logins, or all forms of surveillance. [serverman.co](https://www.serverman.co.uk/everything-vpn/top-10-vpn-misconceptions/)
- “Any VPN is safe and better than none”: empirical studies show many VPN apps (especially free ones) contain malware, lack encryption, leak traffic, or intercept TLS, meaning some VPNs can *reduce* security. [ibtimes.co](https://www.ibtimes.co.uk/it-safe-use-free-vpn-shocking-number-android-apps-found-contain-malware-1603034)
- “Once I install a VPN, I’m secure forever”: guidance from EFF and NSA/CISA stresses that VPNs are only one layer; users still need strong passwords, updates, multi‑factor authentication, and careful browsing. [serverman.co](https://www.serverman.co.uk/everything-vpn/top-10-vpn-misconceptions/)

### Important facts experts agree on
- VPNs are legal in most countries (including the US and EU) when used for lawful activities, though some jurisdictions restrict or ban them, and illegal acts remain illegal regardless of VPN usage. [cybersecuritycampaign.com](https://cybersecuritycampaign.com.hk/vpn/vpn-myths-debunked)
- A VPN protects the confidentiality of traffic between your device and the VPN gateway but does not inherently protect the endpoint devices from malware, misconfiguration, or phishing. [nvlpubs.nist](https://nvlpubs.nist.gov/nistpubs/specialpublications/nist.sp.800-46r2.pdf)
- Many consumer VPN apps advertise privacy and security benefits but include extensive tracking, questionable permissions, and sometimes malware, as documented by CSIRO’s Android VPN analysis. [technologydecisions.com](https://www.technologydecisions.com.au/content/security/news/many-android-vpn-apps-are-not-secure-csiro-812764730)

### Areas where experts disagree
- Some experts recommend VPNs strongly for most users as baseline privacy tools, while others argue that for non‑sensitive home use, focusing on HTTPS, browser hardening, and good account hygiene may be more impactful. [ipvanish](https://www.ipvanish.com/blog/is-vpn-safe/)
- There is debate over marketing claims of “no‑logs” policies; independent audits and legal tests support some providers’ claims (e.g., Proton), but there is skepticism toward unverified vendor statements. [vpnmentor](https://www.vpnmentor.com/news/proton-vpn-4th-independent-no-logs-policy-audit/)
- Views differ on the balance between VPNs and Tor: Tor can offer stronger anonymity at the cost of speed and usability, while VPNs are easier to adopt but centralize trust; experts advise choosing based on threat model. [eff](https://www.eff.org/deeplinks/2017/04/heres-how-protect-your-privacy-your-internet-service-provider)

### Current recommendations from trustworthy organizations
- EFF advises users to approach VPN marketing critically, scrutinizing logging policies, protocol choices, and business models, and recognizing that VPNs shift trust rather than eliminating it. [ssd.eff](https://ssd.eff.org/module/choosing-vpn-thats-right-you)
- NSA/CISA recommend treating VPN gateways as critical infrastructure and hardening them against exploitation, countering myths that VPNs are “set‑and‑forget” solutions. [media.defense](https://media.defense.gov/2021/Sep/28/2002863184/-1/-1/0/csi_selecting-hardening-remote-access-vpns-20210928.pdf)
- NIST publications on remote access emphasize planning, strong authentication, and layered security controls around VPNs rather than relying on them as a single protective mechanism. [csrc.nist](https://csrc.nist.gov/pubs/sp/800/113/final)

### Important statistics
- 38% of Android VPN apps studied contained malware, and 18% did not use encrypted tunnels, directly contradicting common assumptions that any app labeled “VPN” delivers basic security. [research.csiro](https://research.csiro.au/isp/wp-content/uploads/sites/106/2016/09/vpnapps_imc16_presented_slides.pdf)
- 84% of those VPN apps leaked IPv6 traffic and 66% leaked DNS queries, undermining the myth that VPNs automatically prevent all traffic leaks. [technologydecisions.com](https://www.technologydecisions.com.au/content/security/news/many-android-vpn-apps-are-not-secure-csiro-812764730)
- Only a tiny fraction (<1%) of negative user reviews for problematic VPN apps raised privacy or security concerns, suggesting many users accept or overlook dangerous behaviors because of positive marketing. [research.csiro](https://research.csiro.au/isp/wp-content/uploads/sites/106/2016/09/vpnapps_imc16_presented_slides.pdf)

### Privacy/security considerations
- VPNs can see, modify, and log your traffic; EFF warns that choosing a VPN provider without carefully checking its policies can expose users to the same or worse surveillance than their ISP. [eff](https://www.eff.org/deeplinks/2017/04/heres-how-protect-your-privacy-your-internet-service-provider)
- Some VPN apps perform TLS interception and JavaScript injection for ads and tracking, which not only breaks end‑to‑end encryption but also introduces significant privacy and integrity risks. [technologydecisions.com](https://www.technologydecisions.com.au/content/security/news/many-android-vpn-apps-are-not-secure-csiro-812764730)
- Enterprise guidance emphasizes restricting VPN access, segmenting internal networks, and monitoring VPN traffic via intrusion prevention systems, highlighting that VPNs themselves can be attack targets. [securityaffairs](https://securityaffairs.com/122718/security/hardening-access-via-vpn-solutions.html)

### Practical examples
- A user installs a highly rated free VPN that injects JavaScript into traffic and intercepts TLS connections to bank and email sites, as documented in CSIRO’s study; instead of improving security, this increases risk of credential theft and data exposure. [research.csiro](https://research.csiro.au/isp/wp-content/uploads/sites/106/2016/09/vpnapps_imc16_presented_slides.pdf)
- A company assumes that deploying a VPN alone makes remote work secure, but NSA/CISA guidance shows that unpatched VPN appliances and weak authentication have been exploited to breach corporate networks. [csiac.dtic](https://csiac.dtic.mil/articles/nsa-cisa-release-guidance-on-selecting-and-hardening-remote-access-vpns/)
- A privacy‑conscious user follows EFF’s advice by combining a reputable VPN with HTTPS Everywhere and careful browsing, understanding that VPN is one component in a broader privacy strategy, not a magic shield. [ssd.eff](https://ssd.eff.org/module/choosing-vpn-thats-right-you)

### Decision framework (debunking myths in practice)
- Identify marketing claims: list what a VPN service promises (anonymity, “military‑grade” encryption, “no logs”) and cross‑check against independent audits, technical documentation, and research. [vpnmentor](https://www.vpnmentor.com/news/proton-vpn-4th-independent-no-logs-policy-audit/)
- Map myths to realities: compare common user assumptions (e.g., “VPN stops malware”) with guidance from NIST, NSA/CISA, and empirical app studies to determine what VPNs *actually* do. [media.defense](https://media.defense.gov/2021/Sep/28/2002863184/-1/-1/0/csi_selecting-hardening-remote-access-vpns-20210928.pdf)
- Build a layered security plan: decide how VPN, browser extensions, secure DNS, Tor, and device hardening fit together based on your threat model, rather than relying on VPN alone. [nvlpubs.nist](https://nvlpubs.nist.gov/nistpubs/specialpublications/nist.sp.800-46r2.pdf)

### Sources
- CSIRO / Ikram et al., Android VPN privacy and security risk analysis. [ibtimes.co](https://www.ibtimes.co.uk/it-safe-use-free-vpn-shocking-number-android-apps-found-contain-malware-1603034)
- EFF Surveillance Self‑Defense and ISP privacy/VPN articles. [eff](https://www.eff.org/deeplinks/2017/04/heres-how-protect-your-privacy-your-internet-service-provider)
- NSA/CISA remote‑access VPN hardening guidance. [securityaffairs](https://securityaffairs.com/122718/security/hardening-access-via-vpn-solutions.html)
- NIST SP 800‑113 and SP 800‑46 on SSL VPNs and remote access. [csrc.nist](https://csrc.nist.gov/pubs/sp/800/113/final)
- Reputable myth‑debunking materials from security campaigns and independent experts. [cybersecuritycampaign.com](https://cybersecuritycampaign.com.hk/vpn/vpn-myths-debunked)

***

## Topic 5: VPN Buying Guide for Beginners

### Beginner questions people actually ask
- What should I look for when choosing my first VPN—are speed, privacy policy, or server locations most important? [ssd.eff](https://ssd.eff.org/module/choosing-vpn-thats-right-you)
- How do I know if a VPN’s “no‑logs” claim is real and not just marketing? [protonvpn](https://protonvpn.com/blog/no-logs-audit)
- Should I choose a VPN from my browser company (e.g., Mozilla) or from a dedicated VPN brand, and does jurisdiction matter? [mozilla](https://www.mozilla.org/en-US/products/vpn/features/)

### Most common misconceptions
- “Highest number of servers or countries automatically means best VPN” – experts stress that audited privacy practices, transparent policies, and secure implementation matter more than raw server counts. [mozilla](https://www.mozilla.org/en-US/products/vpn/features/)
- “If a VPN is recommended in many affiliate lists, it must be the best” – affiliate content often prioritizes commissions, while organizations like EFF advise relying on technical and policy criteria instead. [ipvanish](https://www.ipvanish.com/blog/is-vpn-safe/)
- “Any ‘no‑logs’ claim is good enough” – without independent audits or legal tests, no‑logs claims can be difficult to verify, and may be contradicted by provider behavior. [vpnmentor](https://www.vpnmentor.com/news/proton-vpn-4th-independent-no-logs-policy-audit/)

### Important facts experts agree on
- Trust and transparency are central: organizations like EFF and Mozilla emphasize clear privacy policies, minimal data collection, and, where possible, open‑source clients and third‑party security audits. [mozilla](https://www.mozilla.org/en-US/products/vpn/features/)
- Technical basics matter: reputable VPNs use strong encryption (e.g., AES‑256), secure protocols (OpenVPN, IPsec, WireGuard), leak protection, and features like kill switches to prevent traffic exposure if the VPN drops. [nvlpubs.nist](https://nvlpubs.nist.gov/nistpubs/specialpublications/nist.sp.800-46r2.pdf)
- Jurisdiction influences legal obligations and data‑retention requirements; providers based in countries without mandatory VPN logging, and with supportive privacy laws, have structural advantages in protecting user data. [techradar](https://www.techradar.com/vpn/vpn-services/proton-vpn-aces-independent-no-logs-audit-for-the-fifth-consecutive-year)

### Areas where experts disagree
- Some experts prioritize independent audits above all else, while others give more weight to long‑term operational history, transparency during incidents, and how a provider behaves under legal pressure. [vpnmentor](https://www.vpnmentor.com/news/proton-vpn-4th-independent-no-logs-policy-audit/)
- There is debate over whether consumer buyers should focus on performance/features (e.g., streaming, game optimization) or on strict privacy posture and open‑source code; priorities vary by use case. [ipvanish](https://www.ipvanish.com/blog/is-vpn-safe/)
- Approaches differ on multi‑tool strategies: some guides encourage a single, carefully chosen VPN as the core privacy tool, while others recommend combining it with Tor or other technologies depending on risk level. [eff](https://www.eff.org/deeplinks/2017/04/heres-how-protect-your-privacy-your-internet-service-provider)

### Current recommendations from trustworthy organizations
- EFF recommends evaluating VPN providers based on logging practices, encryption protocols, business model, and client openness, and suggests avoiding services that are very cheap, opaque, or proprietary‑only. [ssd.eff](https://ssd.eff.org/module/choosing-vpn-thats-right-you)
- NSA/CISA guidance for organizations encourages choosing standards‑based VPN solutions validated by independent labs (e.g., NIAP) and then hardening them with patching, restricted management interfaces, and monitored logging (for access, not activity). [csiac.dtic](https://csiac.dtic.mil/articles/nsa-cisa-release-guidance-on-selecting-and-hardening-remote-access-vpns/)
- Mozilla VPN’s own documentation illustrates what a transparent provider looks like: clear statement that it “never log[s], track[s] or share[s] your network data,” open‑source code, third‑party audits (Cure53), and integration of privacy features such as multi‑hop and tracker blocking. [mozilla](https://www.mozilla.org/en-US/products/vpn/features/)

### Important statistics
- CSIRO’s VPN app study reveals the scale of risk among random mobile VPNs: 38% malware, 18% no encryption, 84% IPv6 leak, 66% DNS leak, 75% tracking libraries—showing why careful selection is critical. [ibtimes.co](https://www.ibtimes.co.uk/it-safe-use-free-vpn-shocking-number-android-apps-found-contain-malware-1603034)
- Proton’s no‑logs policy has been tested in over 400 legal cases, with independent audits repeatedly confirming that no user‑identifiable activity or metadata is stored, providing rare empirical evidence for a “no‑logs” claim. [protonvpn](https://protonvpn.com/support/no-logs-vpn)
- Mozilla VPN documents that it has been audited by Cure53, a well‑known security firm, and that its code is open source, giving buyers concrete evidence of external scrutiny beyond marketing. [mozilla](https://www.mozilla.org/en-US/products/vpn/features/)

### Privacy/security considerations
- Buyers should verify whether the VPN logs connection or activity data, how long any logs are retained, and whether logs could be linked to individual users; EFF stresses this as a primary selection criterion. [eff](https://www.eff.org/deeplinks/2017/04/heres-how-protect-your-privacy-your-internet-service-provider)
- Technical protections like kill switches, DNS and IPv6 leak prevention, multi‑hop routing, and the ability to exclude specific apps from VPN routing (split tunneling) influence real‑world privacy resilience. [nvlpubs.nist](https://nvlpubs.nist.gov/nistpubs/specialpublications/nist.sp.800-46r2.pdf)
- For organizations, NSA/CISA and NIST highlight the need to limit VPN access to necessary internal services, monitor VPN traffic, and patch VPN appliances promptly to prevent them becoming attack vectors. [media.defense](https://media.defense.gov/2021/Sep/28/2002863184/-1/-1/0/csi_selecting-hardening-remote-access-vpns-20210928.pdf)

### Practical examples
- Choosing a consumer VPN: a user compares providers that offer open‑source clients, published audits (e.g., Proton, Mozilla), clear no‑logs policies, and strong protocol support, rather than relying on affiliate rankings or raw server counts. [protonvpn](https://protonvpn.com/blog/no-logs-audit)
- Small business deploying remote access: administrators follow NSA/CISA guidance to pick a standards‑based VPN validated by NIAP, enforce MFA for remote users, restrict management interfaces, and monitor VPN gateways for anomalies. [securityaffairs](https://securityaffairs.com/122718/security/hardening-access-via-vpn-solutions.html)
- Privacy‑first purchase: a user prioritizes providers based in privacy‑protective jurisdictions (e.g., Switzerland for Proton), with repeated audits and transparent incident handling, aligning with EFF’s trust‑through‑transparency emphasis. [techradar](https://www.techradar.com/vpn/vpn-services/proton-vpn-aces-independent-no-logs-audit-for-the-fifth-consecutive-year)

### Decision framework (buying guide)
- Step 1 – Threat model and use case: clarify whether your primary need is ISP privacy, secure telework, streaming, travel/censorship circumvention, or high‑risk activism, as this shapes feature and trust requirements. [nvlpubs.nist](https://nvlpubs.nist.gov/nistpubs/specialpublications/nist.sp.800-46r2.pdf)
- Step 2 – Trust and transparency checks: require a published privacy policy, clear logging statements, preferably open‑source clients, and independent security/no‑logs audits; look for long‑term operation and legal tests where available. [vpnmentor](https://www.vpnmentor.com/news/proton-vpn-4th-independent-no-logs-policy-audit/)
- Step 3 – Technical and usability criteria: verify support for modern protocols (WireGuard/OpenVPN/IPsec), leak protection, kill switch, multi‑device support, and performance suitable for your typical bandwidth and locations. [csrc.nist](https://csrc.nist.gov/pubs/sp/800/113/final)

### Sources
- EFF VPN selection and privacy guidance. [ssd.eff](https://ssd.eff.org/module/choosing-vpn-thats-right-you)
- NSA/CISA “Selecting and Hardening Standards‑Based Remote Access VPN Solutions.” [csiac.dtic](https://csiac.dtic.mil/articles/nsa-cisa-release-guidance-on-selecting-and-hardening-remote-access-vpns/)
- NIST SP 800‑113 and SP 800‑46 remote‑access guidance. [csrc.nist](https://csrc.nist.gov/pubs/sp/800/113/final)
- Mozilla VPN official features, privacy policy, and audit information. [mozilla](https://www.mozilla.org/en-US/products/vpn/features/)
- Proton VPN official documentation and repeated independent audits. [securitum](https://www.securitum.com/public-reports/securitum-protonvpn-nologs-20220330.pdf)
- CSIRO Android VPN risk analysis. [ibtimes.co](https://www.ibtimes.co.uk/it-safe-use-free-vpn-shocking-number-android-apps-found-contain-malware-1603034)

***

This structured research is designed as an evidence‑first backbone for Choose Better Tech editorial work on beginner VPN topics, keeping opinions clearly anchored in verifiable guidance from standards bodies, government agencies, independent researchers, and transparent VPN providers.
