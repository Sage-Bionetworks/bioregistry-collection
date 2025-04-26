// This file is auto-generated. Do not edit manually.
// Generated from bioregistry.io API based on collection.yaml

const onMatch = (value: string) => `https://bioregistry.io/${value}`;

export const bioregistryRules = [
  {
    regex: /(agrkb:[1-9][0-9]{14})/,
    onMatch,
  },
  {
    regex: /(anzctr:ACTRN\d+)/,
    onMatch,
  },
  {
    regex: /(arxiv:(\w+(\-\w+)?(\.\w+)?)?\d{4,7}(\.\d+(v\d+)?)?)/,
    onMatch,
  },
  {
    regex: /(atc:[A-Z](\d+([A-Z]{1,2}(\d+)?)?)?)/,
    onMatch,
  },
  {
    regex: /(atcc:([a-zA-Z]+-)?\d+(\.\d)?)/,
    onMatch,
  },
  {
    regex: /(bacdive:[0-9]+)/,
    onMatch,
  },
  {
    regex: /(bfo:\d{7})/,
    onMatch,
  },
  {
    regex: /(biocyc:[A-Z-0-9]+(\:)?[A-Za-z0-9+_.%-:]+)/,
    onMatch,
  },
  {
    regex: /(bioportal:(\d+)|(\w+))/,
    onMatch,
  },
  {
    regex: /(biorxiv:(\d{4}\.\d{2}\.\d{2}\.)?\d{6,8}(v\d{1,3})?)/,
    onMatch,
  },
  {
    regex: /(biostudies:S-[A-Z]{4}[\-\_A-Z\d]+)/,
    onMatch,
  },
  {
    regex: /(bioproject:PRJ[DEN][A-Z]\d+)/,
    onMatch,
  },
  {
    regex: /(biosample:SAM[NED](\w)?\d+)/,
    onMatch,
  },
  {
    regex: /(bmrb:(bmr|bmse|bmst)?[0-9]{1,6})/,
    onMatch,
  },
  {
    regex: /(brenda:((\d+\.-\.-\.-)|(\d+\.\d+\.-\.-)|(\d+\.\d+\.\d+\.-)|(\d+\.\d+\.\d+\.\d+)))/,
    onMatch,
  },
  {
    regex: /(brenda.ligand:\d+)/,
    onMatch,
  },
  {
    regex: /(brenda.ligandgroup:\d+)/,
    onMatch,
  },
  {
    regex: /(bto:\d{7})/,
    onMatch,
  },
  {
    regex: /(cbioportal:[a-z0-9\_]+)/,
    onMatch,
  },
  {
    regex: /(cellimage:\d+)/,
    onMatch,
  },
  {
    regex: /(chebi:\d+)/,
    onMatch,
  },
  {
    regex: /(chembl:CHEMBL\d+)/,
    onMatch,
  },
  {
    regex: /(chembl.compound:CHEMBL\d+)/,
    onMatch,
  },
  {
    regex: /(civic.aid:[0-9]+)/,
    onMatch,
  },
  {
    regex: /(civic.did:[0-9]+)/,
    onMatch,
  },
  {
    regex: /(civic.eid:[0-9]+)/,
    onMatch,
  },
  {
    regex: /(civic.gid:[0-9]+)/,
    onMatch,
  },
  {
    regex: /(civic.sid:[0-9]+)/,
    onMatch,
  },
  {
    regex: /(civic.tid:[0-9]+)/,
    onMatch,
  },
  {
    regex: /(civic.vid:[0-9]+)/,
    onMatch,
  },
  {
    regex: /(clinicaltrials:NCT\d{8})/,
    onMatch,
  },
  {
    regex: /(clinvar:\d+)/,
    onMatch,
  },
  {
    regex: /(clinvar.record:RCV\d+(\.\d+)?)/,
    onMatch,
  },
  {
    regex: /(cosmic:[A-Z0-9][A-Z0-9-]*)/,
    onMatch,
  },
  {
    regex: /(cpt:\d+)/,
    onMatch,
  },
  {
    regex: /(ctd.chemical:[CD]\d+)/,
    onMatch,
  },
  {
    regex: /(ctis:\d{4}-\d+-\d+-\d+)/,
    onMatch,
  },
  {
    regex: /(ctri:CTRI/\d{4}/\d{2,3}/\d+)/,
    onMatch,
  },
  {
    regex: /(cvx:\d+)/,
    onMatch,
  },
  {
    regex: /(dbsnp:rs\d+)/,
    onMatch,
  },
  {
    regex: /(decipher:\d+)/,
    onMatch,
  },
  {
    regex: /(depmap:ACH-\d+)/,
    onMatch,
  },
  {
    regex: /(dhba:\d+)/,
    onMatch,
  },
  {
    regex: /(dicom:\d+)/,
    onMatch,
  },
  {
    regex: /(dmba:\d+)/,
    onMatch,
  },
  {
    regex: /(doi:10.\d{2,9}/.*)/,
    onMatch,
  },
  {
    regex: /(doid:\d+)/,
    onMatch,
  },
  {
    regex: /(drks:DRKS\d+)/,
    onMatch,
  },
  {
    regex: /(drugbank:DB\d{5})/,
    onMatch,
  },
  {
    regex: /(ega.dataset:EGAD\d{11})/,
    onMatch,
  },
  {
    regex: /(ega.study:EGAS\d{11})/,
    onMatch,
  },
  {
    regex: /(emdb:EMD-\d{4,5})/,
    onMatch,
  },
  {
    regex: /(empiar:\d+)/,
    onMatch,
  },
  {
    regex: /(ena.embl:[A-Z]+[0-9]+(\.\d+)?)/,
    onMatch,
  },
  {
    regex: /(ensembl:((ENS[FPTG]\d{11}(\.\d+)?)|(FB\w{2}\d{7})|(Y[A-Z]{2}\d{3}[a-zA-Z](\-[A-Z])?)|([A-Z_a-z0-9]+(\.)?(t)?(\d+)?([a-z])?)))/,
    onMatch,
  },
  {
    regex: /(euclinicaltrials:\d{4}\-\d{6}\-\d{2})/,
    onMatch,
  },
  {
    regex: /(eupath:\d{7})/,
    onMatch,
  },
  {
    regex: /(exac.variant:\d{1,2}\-\d+\-[GATC]\-[GATC])/,
    onMatch,
  },
  {
    regex: /(flybase:FB\w{2}\d{7})/,
    onMatch,
  },
  {
    regex: /(fma:\d+)/,
    onMatch,
  },
  {
    regex: /(gard:\d+)/,
    onMatch,
  },
  {
    regex: /(gbif:\d+)/,
    onMatch,
  },
  {
    regex: /(geo:G(PL|SM|SE|DS)\d+)/,
    onMatch,
  },
  {
    regex: /(go:\d{7})/,
    onMatch,
  },
  {
    regex: /(gtdb:[cdfgops]__\w+\S+)/,
    onMatch,
  },
  {
    regex: /(hba:\d+)/,
    onMatch,
  },
  {
    regex: /(hc.npn:\d+)/,
    onMatch,
  },
  {
    regex: /(hc.trial:\d+)/,
    onMatch,
  },
  {
    regex: /(hgnc:\d{1,5})/,
    onMatch,
  },
  {
    regex: /(hl7.v2codesystem:\d+)/,
    onMatch,
  },
  {
    regex: /(hl7.v3codesystem:\w+)/,
    onMatch,
  },
  {
    regex: /(hmdb:HMDB\d+)/,
    onMatch,
  },
  {
    regex: /(hp:\d{7})/,
    onMatch,
  },
  {
    regex: /(icd10:(([XVI]+)|([A-Z][0-9]+((-[A-Z][0-9]+)|(\.[0-9]))?)))/,
    onMatch,
  },
  {
    regex: /(icd9:(\d\d\d|V\d\d|E[8-9]\d\d)(\.\d{1,2})?)/,
    onMatch,
  },
  {
    regex: /(icf:\d+)/,
    onMatch,
  },
  {
    regex: /(idr:[0-9]{4})/,
    onMatch,
  },
  {
    regex: /(imgt.hla:[A-Z0-9*:]+)/,
    onMatch,
  },
  {
    regex: /(insdc.sra:[SED]R[APRSXZ]\d+)/,
    onMatch,
  },
  {
    regex: /(interpro:IPR\d{6})/,
    onMatch,
  },
  {
    regex: /(iso.3166:\d+)/,
    onMatch,
  },
  {
    regex: /(isrctn:ISRCTN\d+)/,
    onMatch,
  },
  {
    regex: /(itis:\d+)/,
    onMatch,
  },
  {
    regex: /(jrct:jRCT\w?\d+)/,
    onMatch,
  },
  {
    regex: /(kegg.compound:C\d+)/,
    onMatch,
  },
  {
    regex: /(kegg.pathway:\w{2,4}\d{5})/,
    onMatch,
  },
  {
    regex: /(kegg.reaction:R\d+)/,
    onMatch,
  },
  {
    regex: /(loinc:(\d|\w)+-\d)/,
    onMatch,
  },
  {
    regex: /(lrg:\d+)/,
    onMatch,
  },
  {
    regex: /(massive:MSV\d+)/,
    onMatch,
  },
  {
    regex: /(mba:\d+)/,
    onMatch,
  },
  {
    regex: /(mesh:(C|D|M)\d{6,9})/,
    onMatch,
  },
  {
    regex: /(metabolights:MTBLS\d+)/,
    onMatch,
  },
  {
    regex: /(mgi:\d+)/,
    onMatch,
  },
  {
    regex: /(mondo:\d{7})/,
    onMatch,
  },
  {
    regex: /(ncbigene:\d+)/,
    onMatch,
  },
  {
    regex: /(ncbiprotein:\w+_?\d+(.\d+)?)/,
    onMatch,
  },
  {
    regex: /(ncbitaxon:\d+)/,
    onMatch,
  },
  {
    regex: /(ncit:[CRPA]\d+)/,
    onMatch,
  },
  {
    regex: /(ndc:\d+\-\d+\-\d+)/,
    onMatch,
  },
  {
    regex: /(ndfrt:N[0-9]{10})/,
    onMatch,
  },
  {
    regex: /(nord:\d+)/,
    onMatch,
  },
  {
    regex: /(omim:\d+)/,
    onMatch,
  },
  {
    regex: /(orcid:\d{4}-\d{4}-\d{4}-\d{3}(\d|X))/,
    onMatch,
  },
  {
    regex: /(orphanet:\d+)/,
    onMatch,
  },
  {
    regex: /(orphanet.ordo:C?\d+)/,
    onMatch,
  },
  {
    regex: /(panther.family:PTHR\d{5}(\:SF\d{1,3})?)/,
    onMatch,
  },
  {
    regex: /(panther.node:PTN\d{9})/,
    onMatch,
  },
  {
    regex: /(panther.pathway:P\d{5})/,
    onMatch,
  },
  {
    regex: /(panther.pthcmp:(G|P|U|C|S)\d{5})/,
    onMatch,
  },
  {
    regex: /(pba:\d+)/,
    onMatch,
  },
  {
    regex: /(pdb:[0-9][A-Za-z0-9]{3})/,
    onMatch,
  },
  {
    regex: /(pdb-ccd:\w{1,3})/,
    onMatch,
  },
  {
    regex: /(peptideatlas.dataset:PASS\d{5})/,
    onMatch,
  },
  {
    regex: /(pfam:PF\d{5})/,
    onMatch,
  },
  {
    regex: /(pharmgkb.disease:PA\d+)/,
    onMatch,
  },
  {
    regex: /(pharmgkb.drug:PA\d+)/,
    onMatch,
  },
  {
    regex: /(pharmgkb.gene:PA\w+)/,
    onMatch,
  },
  {
    regex: /(pharmgkb.pathways:PA\d+)/,
    onMatch,
  },
  {
    regex: /(pmc:PMC\d+(\.\d+)?)/,
    onMatch,
  },
  {
    regex: /(pombase:S\w+(\.)?\w+(\.)?)/,
    onMatch,
  },
  {
    regex: /(pride:\d{7})/,
    onMatch,
  },
  {
    regex: /(pubchem.compound:\d+)/,
    onMatch,
  },
  {
    regex: /(pubmed:\d+)/,
    onMatch,
  },
  {
    regex: /(px:(R)?PXD\d{6})/,
    onMatch,
  },
  {
    regex: /(radlex:RID\d+)/,
    onMatch,
  },
  {
    regex: /(reactome:R-[A-Z]{3}-\d+(-\d+)?(\.\d+)?)/,
    onMatch,
  },
  {
    regex: /(rebec:RBR-\w+)/,
    onMatch,
  },
  {
    regex: /(refseq:(((AC|AP|NC|NG|NM|NP|NR|NT|NW|WP|XM|XP|XR|YP|ZP)_\d+)|(NZ_[A-Z]{2,4}\d+))(\.\d+)?)/,
    onMatch,
  },
  {
    regex: /(repec:\d+-\d+(-[A-Z])?)/,
    onMatch,
  },
  {
    regex: /(rgd:\d{4,})/,
    onMatch,
  },
  {
    regex: /(rhea:\d{5})/,
    onMatch,
  },
  {
    regex: /(rpcec:RPCEC\d+)/,
    onMatch,
  },
  {
    regex: /(rxnorm:[0-9]{1,7})/,
    onMatch,
  },
  {
    regex: /(scop:\d+)/,
    onMatch,
  },
  {
    regex: /(sgd:((S\d+$)|(Y[A-Z]{2}\d{3}[a-zA-Z](\-[A-Z])?)))/,
    onMatch,
  },
  {
    regex: /(snomedct:(\w+)?\d+)/,
    onMatch,
  },
  {
    regex: /(so:\d{7})/,
    onMatch,
  },
  {
    regex: /(ssbd.dataset:\d+)/,
    onMatch,
  },
  {
    regex: /(ssbd.project:\d+)/,
    onMatch,
  },
  {
    regex: /(tctr:TCTR\d+)/,
    onMatch,
  },
  {
    regex: /(uberon:\d+)/,
    onMatch,
  },
  {
    regex: /(unii:[A-Z0-9]+)/,
    onMatch,
  },
  {
    regex: /(uniprot:([A-N,R-Z][0-9]([A-Z][A-Z, 0-9][A-Z, 0-9][0-9]){1,2})|([O,P,Q][0-9][A-Z, 0-9][A-Z, 0-9][A-Z, 0-9][0-9])(\.\d+)?)/,
    onMatch,
  },
  {
    regex: /(wikipathways:WP\d{1,5}(\_r\d+)?)/,
    onMatch,
  },
  {
    regex: /(wikidata:(Q|P|E|L)\d+)/,
    onMatch,
  },
  {
    regex: /(wikigenes:\d+)/,
    onMatch,
  },
  {
    regex: /(wormbase:(CE[0-9]{5}|WB[A-Z][a-z]+\d+))/,
    onMatch,
  },
  {
    regex: /(xenbase:XB\-\w+\-\d+)/,
    onMatch,
  },
  {
    regex: /(zenodo.record:\d+)/,
    onMatch,
  },
  {
    regex: /(zfin:ZDB\-\w+\-\d+\-\d+)/,
    onMatch,
  },
]
