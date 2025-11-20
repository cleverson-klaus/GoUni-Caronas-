import { supabase } from './supabaseClient.js';

/**
 * Cadastra um novo usuário diretamente com o Supabase.
 * @param {object} dadosDoFormulario - Os dados do formulário de cadastro.
 * @returns {Promise<object>} Os dados do usuário e da sessão.
 */
export async function cadastrarUsuario(dadosDoFormulario) {
    // Corrigido para usar os 'name' corretos do formulário de cadastro.html
    const { universityEmail, password, fullName, ...outrosDados } = dadosDoFormulario;

    // A validação agora usa as variáveis corretas
    if (!universityEmail || !password || !fullName) {
        throw new Error("Nome, email e senha são obrigatórios.");
    }

    // Usa o SDK do Supabase para cadastrar o usuário
    const { data, error } = await supabase.auth.signUp({
        email: universityEmail,
        password: password,
        options: {
            // Passa os dados extras para o trigger do Supabase
            data: {
                full_name: fullName,
                ...outrosDados
            }
        }
    });

    if (error) {
        // Lança o erro do Supabase, que é mais claro (ex: "User already registered")
        throw error;
    }

    return data;
}

/**
 * Realiza o login do usuário com email e senha.
 * @param {string} email - O email do usuário.
 * @param {string} password - A senha do usuário.
 * @returns {Promise<object>} A resposta da API do Supabase.
 */
export const signIn = (email, password) => supabase.auth.signInWithPassword({ email, password });
