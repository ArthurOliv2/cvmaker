import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Font,
    Link
} from '@react-pdf/renderer';

// Estilos
const styles = StyleSheet.create({
    page: {
        padding: 40,
        fontSize: 11,
        fontFamily: 'Helvetica',
        lineHeight: 1.6,
    },
    header: {
        textAlign: 'center',
        marginBottom: 12,
    },
    nome: {
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    infoPessoal: {
        marginBottom: 20,
        textAlign: 'center',
    },
    linkEmail: {
        color: '#0077cc',
        textDecoration: 'underline',
    },
    section: {
        marginBottom: 14,
    },
    tituloSecao: {
        fontSize: 12,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 4,
    },
    bold: {
        fontWeight: 'bold',
    },
    experienciaItem: {
        marginBottom: 8,
    },
    experienciaTitulo: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    experienciaCargo: {
        marginTop: 2,
        marginBottom: 2,
    },
    experienciaPeriodo: {
        fontSize: 10,
        color: '#333',
        marginBottom: 4,
    },
    bullet: {
        marginLeft: 10,
        marginBottom: 2,
    },
});

const CurriculoPDF = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            
            {/* Nome e Info Pessoal */}
            <View style={styles.header}>
                <Text style={styles.nome}>ARTHUR OLIVEIRA PIRES MARINHO CORREIA</Text>
            </View>
            <View style={styles.infoPessoal}>
                <Text>23 anos</Text>
                <Text>Maricá, Araçatiba/RJ</Text>
                <Text>(21) 97217-0432</Text>
                <Link src="mailto:arthurolivep@gmail.com" style={styles.linkEmail}>
                    arthurolivep@gmail.com
                </Link>
            </View>

            {/* Objetivo */}
            <View style={styles.section}>
                <Text style={styles.tituloSecao}>Objetivo</Text>
                <Text>Programador Full Stack</Text>
            </View>

            {/* Resumo Profissional */}
            <View style={styles.section}>
                <Text style={styles.tituloSecao}>Resumo Profissional</Text>
                <Text>
                    Desenvolvedor com um forte conhecimento fundamental em HTML, CSS e JavaScript,
                    complementado por experiência em PHP e no framework Laravel. Possuindo um bom entendimento
                    de bancos de dados como MySQL e PostgreSQL, dedicado aos estudos de frameworks JavaScript
                    (Node.js, Vue.JS), além do Bootstrap. Estudante da Universidade de Vassouras, buscando
                    uma oportunidade para aplicar e desenvolver minhas habilidades em um ambiente profissional.
                </Text>
            </View>

            {/* Formação Acadêmica */}
            <View style={styles.section}>
                <Text style={styles.tituloSecao}>Formação Acadêmica</Text>
                <Text style={styles.bold}>
                    Matemática Licenciatura <Text>(Universidade Federal Fluminense), incompleto</Text>
                </Text>
                <Text style={styles.bold}>
                    Engenharia de Software <Text>(Universidade de Vassouras), cursando</Text>
                </Text>
            </View>

            {/* Experiência */}
            <View style={styles.section}>
                <Text style={styles.tituloSecao}>Experiência</Text>

                {/* Experiência 1 */}
                <View style={styles.experienciaItem}>
                    <Text style={styles.experienciaTitulo}>
                        PLATAFORMA DE COMUNICAÇÃO MOTOBOY/EMPRESA (projeto acadêmico)
                    </Text>
                    <Text style={styles.experienciaCargo}>Desenvolvedor Full Stack</Text>
                    <Text style={styles.experienciaPeriodo}>Fev de 2025 – atualmente</Text>
                    <View>
                        <Text style={styles.bullet}>• Colaborei ativamente na concepção do projeto, liderando o desenvolvimento do código base da fase inicial;</Text>
                        <Text style={styles.bullet}>• Ajudei no trabalho de busca de requisitos junto ao grupo de análise;</Text>
                        <Text style={styles.bullet}>• Desenvolvi landing page com HTML, CSS e JS + integração com EmailJS;</Text>
                        <Text style={styles.bullet}>• Modelei banco de dados e preparei estrutura PHP + Laravel.</Text>
                    </View>
                </View>

                {/* Experiência 2 */}
                <View style={styles.experienciaItem}>
                    <Text style={styles.experienciaTitulo}>DOMUS LAGUNA (projeto acadêmico)</Text>
                    <Text style={styles.experienciaCargo}>Gerente de projeto acadêmico</Text>
                    <Text style={styles.experienciaPeriodo}>Mar 2024 – Jan 2025</Text>
                </View>
            </View>
        </Page>
    </Document>
);

export default CurriculoPDF;