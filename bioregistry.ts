// This file is auto-generated. Do not edit manually.
// Generated from bioregistry.io API based on collection.yaml

export const bioregistryRules = [
  {
    regex: /(agrkb:[1-9][0-9]{14})/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(anzctr:ACTRN\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(arxiv:(\\w+(\\-\\w+)?(\\.\\w+)?)?\\d{4,7}(\\.\\d+(v\\d+)?)?)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(atcc:([a-zA-Z]+-)?\\d+(\\.\\d)?)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(bacdive:[0-9]+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(bfo:\\d{7})/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(bioportal:(\\d+)|(\\w+))/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(biorxiv:(\\d{4}\\.\\d{2}\\.\\d{2}\\.)?\\d{6,8}(v\\d{1,3})?)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(biostudies:S-[A-Z]{4}[\\-\\_A-Z\\d]+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(bmrb:(bmr|bmse|bmst)?[0-9]{1,6})/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(brenda:((\\d+\\.-\\.-\\.-)|(\\d+\\.\\d+\\.-\\.-)|(\\d+\\.\\d+\\.\\d+\\.-)|(\\d+\\.\\d+\\.\\d+\\.\\d+)))/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(brenda.ligand:\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(brenda.ligandgroup:\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(bto:\\d{7})/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(cbioportal:[a-z0-9\\_]+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(cellimage:\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(chebi:\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(chembl:CHEMBL\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(chictr:ChiCTR(-[A-Z]+-)?\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(civic.aid:[0-9]+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(civic.did:[0-9]+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(civic.eid:[0-9]+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(civic.gid:[0-9]+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(civic.sid:[0-9]+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(civic.tid:[0-9]+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(civic.vid:[0-9]+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(clinicaltrials:NCT\\d{8})/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(clinvar:\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(clinvar.record:RCV\\d+(\\.\\d+)?)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(cosmic:[A-Z0-9][A-Z0-9-]*)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(cpt:\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(ctis:\\d{4}-\\d+-\\d+-\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(ctri:CTRI/\\d{4}/\\d{2,3}/\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(cvx:\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(dbsnp:rs\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(dhba:\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(dicom:\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(dmba:\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(drks:DRKS\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(dsm5:\\d{3}\\.\\d{2})/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(ega.dataset:EGAD\\d{11})/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(ega.study:EGAS\\d{11})/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(emdb:EMD-\\d{4,5})/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(empiar:\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(ena.embl:[A-Z]+[0-9]+(\\.\\d+)?)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(ensembl:((ENS[FPTG]\\d{11}(\\.\\d+)?)|(FB\\w{2}\\d{7})|(Y[A-Z]{2}\\d{3}[a-zA-Z](\\-[A-Z])?)|([A-Z_a-z0-9]+(\\.)?(t)?(\\d+)?([a-z])?)))/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(euclinicaltrials:\\d{4}\\-\\d{6}\\-\\d{2})/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(eupath:\\d{7})/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(flybase:FB\\w{2}\\d{7})/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(gbif:\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(geo:G(PL|SM|SE|DS)\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(go:\\d{7})/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(hba:\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(hc.din:\\d{8})/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(hc.npn:\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(hc.trial:\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(hgnc:\\d{1,5})/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(hl7.v2codesystem:\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(hl7.v3codesystem:\\w+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(icd10:(([XVI]+)|([A-Z][0-9]+((-[A-Z][0-9]+)|(\\.[0-9]))?)))/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(icd9:(\\d\\d\\d|V\\d\\d|E[8-9]\\d\\d)(\\.\\d{1,2})?)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(icf:\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(idr:[0-9]{4})/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(ietf.language:\\w{2,3}(-\\w+)?)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(imgt.hla:[A-Z0-9*:]+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(insdc.sra:[SED]R[APRSXZ]\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(interpro:IPR\\d{6})/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(irct:IRCT\\d+N\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(iso.3166:\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(isrctn:ISRCTN\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(itmctr:ITMCTR\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(jrct:jRCT\\w?\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(kcris:KCT\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(lbctr:LBCTR\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(loinc:(\\d|\\w)+-\\d)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(lrg:\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(massive:MSV\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(mba:\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(mgi:\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(ncit:[CRPA]\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(ndc:\\d+\\-\\d+\\-\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(ndfrt:N[0-9]{10})/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(nucc.taxonomy:\\d{3}\\w(\\w|\\d_)\\d{4}X)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(omim:\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(orphanet:\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(orphanet.ordo:C?\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(pactr:PACTR\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(panther.family:PTHR\\d{5}(\\:SF\\d{1,3})?)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(panther.node:PTN\\d{9})/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(panther.pathway:P\\d{5})/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(panther.pthcmp:(G|P|U|C|S)\\d{5})/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(pba:\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(pdb:[0-9][A-Za-z0-9]{3})/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(peptideatlas.dataset:PASS\\d{5})/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(pharmgkb.disease:PA\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(pharmgkb.drug:PA\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(pharmgkb.gene:PA\\w+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(pharmgkb.pathways:PA\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(pmc:PMC\\d+(\\.\\d+)?)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(pombase:S\\w+(\\.)?\\w+(\\.)?)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(pride:\\d{7})/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(pubmed:\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(px:(R)?PXD\\d{6})/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(radlex:RID\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(reactome:R-[A-Z]{3}-\\d+(-\\d+)?(\\.\\d+)?)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(rebec:RBR-\\w+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(refseq:(((AC|AP|NC|NG|NM|NP|NR|NT|NW|WP|XM|XP|XR|YP|ZP)_\\d+)|(NZ_[A-Z]{2,4}\\d+))(\\.\\d+)?)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(repec:\\d+-\\d+(-[A-Z])?)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(rgd:\\d{4,})/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(rhea:\\d{5})/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(rpcec:RPCEC\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(rxnorm:[0-9]{1,7})/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(sgd:((S\\d+$)|(Y[A-Z]{2}\\d{3}[a-zA-Z](\\-[A-Z])?)))/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(slctr:SLCTR/\\d{4}/\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(snomedct:(\\w+)?\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(so:\\d{7})/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(ssbd.dataset:\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(ssbd.project:\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(tctr:TCTR\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(uminctr:UMIN\\d+$|^C\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(unii:[A-Z0-9]+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(uniprot:([A-N,R-Z][0-9]([A-Z][A-Z, 0-9][A-Z, 0-9][0-9]){1,2})|([O,P,Q][0-9][A-Z, 0-9][A-Z, 0-9][A-Z, 0-9][0-9])(\\.\\d+)?)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(wikidata:(Q|P|E|L)\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(wikigenes:\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(wormbase:(CE[0-9]{5}|WB[A-Z][a-z]+\\d+))/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(xenbase:XB\\-\\w+\\-\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
  {
    regex: /(zfin:ZDB\\-\\w+\\-\\d+\\-\\d+)/,
    onMatch: (value: string) => `https://bioregistry.io/${value}`,
  },
]
